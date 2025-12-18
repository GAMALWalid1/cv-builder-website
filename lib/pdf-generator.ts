import html2canvas from "html2canvas"
import jsPDF from "jspdf"

export async function downloadCV(element: HTMLElement, fileName: string) {
  // Create a clone of the element to avoid modifying the original
  const clone = element.cloneNode(true) as HTMLElement

  // Temporarily append the clone to the body (hidden)
  clone.style.position = "absolute"
  clone.style.left = "-9999px"
  clone.style.top = "0"
  document.body.appendChild(clone)

  try {
    // Capture the element as a canvas
    const canvas = await html2canvas(clone, {
      scale: 2, // Higher quality
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    })

    // Calculate PDF dimensions (A4 size)
    const imgWidth = 210 // A4 width in mm
    const pageHeight = 297 // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width
    let heightLeft = imgHeight

    // Create PDF
    const pdf = new jsPDF("p", "mm", "a4")
    let position = 0

    // Add image to PDF
    const imgData = canvas.toDataURL("image/png")
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
    heightLeft -= pageHeight

    // Add new pages if content exceeds one page
    while (heightLeft > 0) {
      position = heightLeft - imgHeight
      pdf.addPage()
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight
    }

    // Download the PDF
    pdf.save(fileName)
  } finally {
    // Clean up the clone
    document.body.removeChild(clone)
  }
}
