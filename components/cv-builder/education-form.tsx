"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"
import type { Education } from "@/lib/types"

interface EducationFormProps {
  data: Education[]
  onChange: (data: Education[]) => void
}

export function EducationForm({ data, onChange }: EducationFormProps) {
  const addEducation = () => {
    onChange([
      ...data,
      {
        id: Date.now().toString(),
        school: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: "",
        gpa: "",
      },
    ])
  }

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    onChange(data.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)))
  }

  const removeEducation = (id: string) => {
    onChange(data.filter((edu) => edu.id !== id))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Education</h2>
        <p className="text-muted-foreground text-sm">Add your academic background</p>
      </div>

      {data.length === 0 ? (
        <Card className="p-8 text-center border-dashed">
          <p className="text-muted-foreground mb-4">No education added yet</p>
          <Button onClick={addEducation} variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Education
          </Button>
        </Card>
      ) : (
        <div className="space-y-4">
          {data.map((edu, index) => (
            <Card key={edu.id} className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Education {index + 1}</h3>
                <Button variant="ghost" size="sm" onClick={() => removeEducation(edu.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor={`school-${edu.id}`}>School/University *</Label>
                  <Input
                    id={`school-${edu.id}`}
                    placeholder="University of California"
                    value={edu.school}
                    onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`degree-${edu.id}`}>Degree *</Label>
                    <Input
                      id={`degree-${edu.id}`}
                      placeholder="Bachelor of Science"
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`field-${edu.id}`}>Field of Study *</Label>
                    <Input
                      id={`field-${edu.id}`}
                      placeholder="Computer Science"
                      value={edu.field}
                      onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor={`startDate-${edu.id}`}>Start Date *</Label>
                    <Input
                      id={`startDate-${edu.id}`}
                      type="month"
                      value={edu.startDate}
                      onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`endDate-${edu.id}`}>End Date *</Label>
                    <Input
                      id={`endDate-${edu.id}`}
                      type="month"
                      value={edu.endDate}
                      onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`gpa-${edu.id}`}>GPA (Optional)</Label>
                    <Input
                      id={`gpa-${edu.id}`}
                      placeholder="3.8"
                      value={edu.gpa}
                      onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}

          <Button onClick={addEducation} variant="outline" className="w-full bg-transparent">
            <Plus className="h-4 w-4 mr-2" />
            Add Another Education
          </Button>
        </div>
      )}
    </div>
  )
}
