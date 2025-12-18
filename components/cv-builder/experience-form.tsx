"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"
import type { Experience } from "@/lib/types"

interface ExperienceFormProps {
  data: Experience[]
  onChange: (data: Experience[]) => void
}

export function ExperienceForm({ data, onChange }: ExperienceFormProps) {
  const addExperience = () => {
    onChange([
      ...data,
      {
        id: Date.now().toString(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      },
    ])
  }

  const updateExperience = (id: string, field: keyof Experience, value: any) => {
    onChange(data.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)))
  }

  const removeExperience = (id: string) => {
    onChange(data.filter((exp) => exp.id !== id))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
        <p className="text-muted-foreground text-sm">Add your professional experience</p>
      </div>

      {data.length === 0 ? (
        <Card className="p-8 text-center border-dashed">
          <p className="text-muted-foreground mb-4">No work experience added yet</p>
          <Button onClick={addExperience} variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Experience
          </Button>
        </Card>
      ) : (
        <div className="space-y-4">
          {data.map((exp, index) => (
            <Card key={exp.id} className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Experience {index + 1}</h3>
                <Button variant="ghost" size="sm" onClick={() => removeExperience(exp.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`position-${exp.id}`}>Position *</Label>
                    <Input
                      id={`position-${exp.id}`}
                      placeholder="Software Engineer"
                      value={exp.position}
                      onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`company-${exp.id}`}>Company *</Label>
                    <Input
                      id={`company-${exp.id}`}
                      placeholder="Tech Corp"
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`startDate-${exp.id}`}>Start Date *</Label>
                    <Input
                      id={`startDate-${exp.id}`}
                      type="month"
                      value={exp.startDate}
                      onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`endDate-${exp.id}`}>End Date</Label>
                    <Input
                      id={`endDate-${exp.id}`}
                      type="month"
                      value={exp.endDate}
                      disabled={exp.current}
                      onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <input
                        type="checkbox"
                        id={`current-${exp.id}`}
                        checked={exp.current}
                        onChange={(e) => updateExperience(exp.id, "current", e.target.checked)}
                        className="h-4 w-4"
                      />
                      <Label htmlFor={`current-${exp.id}`} className="font-normal text-sm">
                        Current position
                      </Label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor={`description-${exp.id}`}>Description</Label>
                  <Textarea
                    id={`description-${exp.id}`}
                    placeholder="• Developed and maintained web applications&#10;• Collaborated with cross-functional teams&#10;• Improved system performance by 30%"
                    rows={4}
                    value={exp.description}
                    onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">Use bullet points to list your achievements</p>
                </div>
              </div>
            </Card>
          ))}

          <Button onClick={addExperience} variant="outline" className="w-full bg-transparent">
            <Plus className="h-4 w-4 mr-2" />
            Add Another Experience
          </Button>
        </div>
      )}
    </div>
  )
}
