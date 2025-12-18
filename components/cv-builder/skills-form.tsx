"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { useState } from "react"

interface SkillsFormProps {
  data: string[]
  onChange: (data: string[]) => void
}

export function SkillsForm({ data, onChange }: SkillsFormProps) {
  const [inputValue, setInputValue] = useState("")

  const addSkill = () => {
    if (inputValue.trim() && !data.includes(inputValue.trim())) {
      onChange([...data, inputValue.trim()])
      setInputValue("")
    }
  }

  const removeSkill = (skill: string) => {
    onChange(data.filter((s) => s !== skill))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addSkill()
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Skills</h2>
        <p className="text-muted-foreground text-sm">Add your technical and soft skills</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="skill-input">Add Skill</Label>
          <div className="flex gap-2">
            <Input
              id="skill-input"
              placeholder=", JavaScript, Project Management, Communication"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Button onClick={addSkill} type="button">
              Add
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Press Enter or click Add to include the skill</p>
        </div>

        {data.length > 0 && (
          <div>
            <Label>Your Skills ({data.length})</Label>
            <div className="flex flex-wrap gap-2 mt-2 p-4 bg-muted/50 rounded-lg min-h-25">
              {data.map((skill) => (
                <Badge key={skill} variant="secondary" className="pl-3 pr-1 py-1.5 text-sm">
                  {skill}
                  <button onClick={() => removeSkill(skill)} className="ml-2 hover:bg-background/50 rounded-full p-0.5">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
        )}

        {data.length === 0 && (
          <div className="p-8 text-center border border-dashed rounded-lg">
            <p className="text-muted-foreground text-sm">No skills added yet. Start adding your skills above.</p>
          </div>
        )}
      </div>
    </div>
  )
}
