"use client"

import { Card } from "@/components/ui/card"
import type { CVData } from "@/lib/types"
import { Mail, Phone, MapPin } from "lucide-react"

interface CVPreviewProps {
  data: CVData
  template?: "classic" | "modern" | "minimal"
}

export function CVPreview({ data, template = "classic" }: CVPreviewProps) {
  const formatDate = (date: string) => {
    if (!date) return ""
    const [year, month] = date.split("-")
    return new Date(Number.parseInt(year), Number.parseInt(month) - 1).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
  }

  if (template === "modern") {
    return <ModernTemplate data={data} formatDate={formatDate} />
  }

  if (template === "minimal") {
    return <MinimalTemplate data={data} formatDate={formatDate} />
  }

  return (
    <Card className="p-8 bg-white shadow-lg min-h-150">
      {/* Header */}
      <div className="border-b pb-6 mb-6">
        <h1 className="text-3xl font-bold mb-1">{data.personalInfo.fullName || "Your Name"}</h1>
        <p className="text-lg text-muted-foreground mb-3">{data.personalInfo.title || "Professional Title"}</p>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {data.personalInfo.email && (
            <div className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" />
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              <span>{data.personalInfo.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{data.personalInfo.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3">Work Experience</h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h3 className="font-semibold">{exp.position}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                    {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                  </p>
                </div>
                {exp.description && (
                  <p className="text-sm text-muted-foreground mt-2 whitespace-pre-line leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3">Education</h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                    {edu.gpa && <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>}
                  </div>
                  <p className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-lg font-bold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span key={skill} className="px-3 py-1 bg-muted text-sm rounded-md">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {!data.personalInfo.fullName &&
        data.experience.length === 0 &&
        data.education.length === 0 &&
        data.skills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Your CV preview will appear here as you fill in the form</p>
          </div>
        )}
    </Card>
  )
}

function ModernTemplate({ data, formatDate }: { data: CVData; formatDate: (date: string) => string }) {
  return (
    <Card className="bg-white shadow-lg min-h-150 overflow-hidden">
      {/* Accent Header */}
      <div className="bg-linear-to-r from-blue-600 to-blue-500 text-white p-8 pb-6">
        <h1 className="text-3xl font-bold mb-1">{data.personalInfo.fullName || "Your Name"}</h1>
        <p className="text-lg opacity-90">{data.personalInfo.title || "Professional Title"}</p>
      </div>

      <div className="p-8">
        {/* Contact Info */}
        <div className="flex flex-wrap gap-4 text-sm mb-6 pb-6 border-b">
          {data.personalInfo.email && (
            <div className="flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-blue-600" />
              <span>{data.personalInfo.email}</span>
            </div>
          )}
          {data.personalInfo.phone && (
            <div className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-blue-600" />
              <span>{data.personalInfo.phone}</span>
            </div>
          )}
          {data.personalInfo.location && (
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-blue-600" />
              <span>{data.personalInfo.location}</span>
            </div>
          )}
        </div>

        {/* Summary */}
        {data.personalInfo.summary && (
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2 text-blue-600 uppercase tracking-wide">Profile</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{data.personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3 text-blue-600 uppercase tracking-wide">Experience</h2>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div key={exp.id} className="pl-4 border-l-2 border-blue-600">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="font-semibold text-base">{exp.position}</h3>
                      <p className="text-sm text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                      {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                    </p>
                  </div>
                  {exp.description && (
                    <p className="text-sm text-muted-foreground mt-2 whitespace-pre-line leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-3 text-blue-600 uppercase tracking-wide">Education</h2>
            <div className="space-y-3">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">
                        {edu.degree} in {edu.field}
                      </h3>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                      {edu.gpa && <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>}
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mb-2 text-blue-600 uppercase tracking-wide">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-md font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!data.personalInfo.fullName &&
          data.experience.length === 0 &&
          data.education.length === 0 &&
          data.skills.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Your CV preview will appear here as you fill in the form</p>
            </div>
          )}
      </div>
    </Card>
  )
}

function MinimalTemplate({ data, formatDate }: { data: CVData; formatDate: (date: string) => string }) {
  return (
    <Card className="p-8 bg-white shadow-lg min-h-150">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-light mb-2 tracking-tight">{data.personalInfo.fullName || "Your Name"}</h1>
        <p className="text-base text-muted-foreground mb-4">{data.personalInfo.title || "Professional Title"}</p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && (
            <>
              <span>•</span>
              <span>{data.personalInfo.phone}</span>
            </>
          )}
          {data.personalInfo.location && (
            <>
              <span>•</span>
              <span>{data.personalInfo.location}</span>
            </>
          )}
        </div>
      </div>

      <div className="h-px bg-border mb-8" />

      {/* Summary */}
      {data.personalInfo.summary && (
        <div className="mb-8">
          <p className="text-sm leading-relaxed text-center text-muted-foreground italic">
            {data.personalInfo.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold mb-4 tracking-widest uppercase text-center">Experience</h2>
          <div className="space-y-5">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="text-center mb-2">
                  <h3 className="font-semibold">{exp.position}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate)}
                  </p>
                </div>
                {exp.description && (
                  <p className="text-sm text-muted-foreground text-center whitespace-pre-line leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold mb-4 tracking-widest uppercase text-center">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id} className="text-center">
                <h3 className="font-semibold">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  {edu.gpa && ` • GPA: ${edu.gpa}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold mb-4 tracking-widest uppercase text-center">Skills</h2>
          <p className="text-sm text-center text-muted-foreground">{data.skills.join(" • ")}</p>
        </div>
      )}

      {/* Empty State */}
      {!data.personalInfo.fullName &&
        data.experience.length === 0 &&
        data.education.length === 0 &&
        data.skills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Your CV preview will appear here as you fill in the form</p>
          </div>
        )}
    </Card>
  )
}
