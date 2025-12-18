"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, FileText, Download } from "lucide-react"
import Link from "next/link"
import { PersonalInfoForm } from "@/components/cv-builder/personal-info-form"
import { ExperienceForm } from "@/components/cv-builder/experience-form"
import { EducationForm } from "@/components/cv-builder/education-form"
import { SkillsForm } from "@/components/cv-builder/skills-form"
import { CVPreview } from "@/components/cv-builder/cv-preview"
import { TemplateSelector } from "@/components/cv-builder/template-selector"
import { downloadCV } from "@/lib/pdf-generator"
import type { CVData } from "@/lib/types"

const steps = [
  { id: "personal", title: "Personal Info", description: "Your basic information" },
  { id: "experience", title: "Experience", description: "Work history" },
  { id: "education", title: "Education", description: "Academic background" },
  { id: "skills", title: "Skills", description: "Your expertise" },
]

export default function BuilderPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedTemplate, setSelectedTemplate] = useState<"classic" | "modern" | "minimal">("classic")
  const [showTemplateSelector, setShowTemplateSelector] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const cvPreviewRef = useRef<HTMLDivElement>(null)
  const [cvData, setCVData] = useState<CVData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      title: "",
      summary: "",
    },
    experience: [],
    education: [],
    skills: [],
  })

  const updateCVData = (section: keyof CVData, data: any) => {
    setCVData((prev) => ({ ...prev, [section]: data }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleDownload = async () => {
    if (!cvPreviewRef.current) return

    setIsDownloading(true)
    try {
      const fileName = cvData.personalInfo.fullName
        ? `${cvData.personalInfo.fullName.replace(/\s+/g, "_")}_CV.pdf`
        : "My_CV.pdf"

      await downloadCV(cvPreviewRef.current, fileName)
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Failed to download CV. Please try again.")
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="border-b bg-background sticky top-0 z-10">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">CV-Builder</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline">
              Step {currentStep + 1} of {steps.length}
            </span>
            <Button variant="outline" size="sm">
              Save Progress
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div>
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center flex-1">
                    <button
                      onClick={() => setCurrentStep(index)}
                      className={`flex flex-col items-center gap-2 flex-1 ${index === currentStep ? "opacity-100" : "opacity-50"
                        }`}
                    >
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${index <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                          }`}
                      >
                        {index + 1}
                      </div>
                      <div className="text-center hidden sm:block">
                        <div className="text-xs font-medium">{step.title}</div>
                        <div className="text-xs text-muted-foreground">{step.description}</div>
                      </div>
                    </button>
                    {index < steps.length - 1 && (
                      <div className={`h-0.5 flex-1 mx-2 ${index < currentStep ? "bg-primary" : "bg-muted"}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <Card className="p-6">
              {currentStep === 0 && (
                <PersonalInfoForm data={cvData.personalInfo} onChange={(data) => updateCVData("personalInfo", data)} />
              )}
              {currentStep === 1 && (
                <ExperienceForm data={cvData.experience} onChange={(data) => updateCVData("experience", data)} />
              )}
              {currentStep === 2 && (
                <EducationForm data={cvData.education} onChange={(data) => updateCVData("education", data)} />
              )}
              {currentStep === 3 && (
                <SkillsForm data={cvData.skills} onChange={(data) => updateCVData("skills", data)} />
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t">
                <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                {currentStep === steps.length - 1 ? (
                  <Button onClick={handleDownload} disabled={isDownloading}>
                    {isDownloading ? (
                      <>Generating PDF...</>
                    ) : (
                      <>
                        Download CV
                        <Download className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                ) : (
                  <Button onClick={handleNext}>
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>
            </Card>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Live Preview</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => setShowTemplateSelector(true)}>
                  Change Template
                </Button>
                <Button variant="outline" size="sm" onClick={handleDownload} disabled={isDownloading}>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div ref={cvPreviewRef}>
              <CVPreview data={cvData} template={selectedTemplate} />
            </div>
          </div>
        </div>
      </div>

      {/* Template Selector Modal */}
      <TemplateSelector
        open={showTemplateSelector}
        onClose={() => setShowTemplateSelector(false)}
        selectedTemplate={selectedTemplate}
        onSelectTemplate={(template) => {
          setSelectedTemplate(template)
          setShowTemplateSelector(false)
        }}
      />
    </div>
  )
}
