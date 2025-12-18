"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface TemplateSelectorProps {
  open: boolean
  onClose: () => void
  selectedTemplate: "classic" | "modern" | "minimal"
  onSelectTemplate: (template: "classic" | "modern" | "minimal") => void
}

export function TemplateSelector({ open, onClose, selectedTemplate, onSelectTemplate }: TemplateSelectorProps) {
  const templates = [
    {
      id: "classic" as const,
      name: "Classic",
      description: "Traditional and professional",
      preview: (
        <div className="h-full bg-white p-4 text-xs">
          <div className="border-b pb-2 mb-2">
            <div className="h-2 bg-gray-800 w-20 mb-1" />
            <div className="h-1.5 bg-gray-500 w-16" />
          </div>
          <div className="space-y-2">
            <div className="h-1 bg-gray-300 w-full" />
            <div className="h-1 bg-gray-300 w-full" />
            <div className="h-1 bg-gray-300 w-3/4" />
          </div>
        </div>
      ),
    },
    {
      id: "modern" as const,
      name: "Modern",
      description: "Bold and contemporary",
      preview: (
        <div className="h-full bg-white text-xs">
          <div className="bg-blue-600 p-4 mb-2">
            <div className="h-2 bg-white w-20 mb-1" />
            <div className="h-1.5 bg-white/80 w-16" />
          </div>
          <div className="px-4 space-y-2">
            <div className="h-1 bg-gray-300 w-full" />
            <div className="h-1 bg-gray-300 w-full" />
            <div className="h-1 bg-gray-300 w-3/4" />
          </div>
        </div>
      ),
    },
    {
      id: "minimal" as const,
      name: "Minimal",
      description: "Clean and elegant",
      preview: (
        <div className="h-full bg-white p-4 text-xs">
          <div className="text-center pb-2 mb-2 border-b">
            <div className="h-2 bg-gray-800 w-20 mx-auto mb-1" />
            <div className="h-1.5 bg-gray-500 w-16 mx-auto" />
          </div>
          <div className="space-y-2">
            <div className="h-1 bg-gray-300 w-full" />
            <div className="h-1 bg-gray-300 w-full" />
            <div className="h-1 bg-gray-300 w-3/4 mx-auto" />
          </div>
        </div>
      ),
    },
  ]

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Choose a Template</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {templates.map((template) => (
            <Card
              key={template.id}
              className={`cursor-pointer transition-all overflow-hidden ${
                selectedTemplate === template.id ? "ring-2 ring-primary" : "hover:border-primary"
              }`}
              onClick={() => onSelectTemplate(template.id)}
            >
              <div className="h-48 border-b relative">{template.preview}</div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold">{template.name}</h3>
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                  </div>
                  {selectedTemplate === template.id && (
                    <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
                <Button
                  variant={selectedTemplate === template.id ? "default" : "outline"}
                  size="sm"
                  className="w-full bg-transparent"
                  onClick={() => onSelectTemplate(template.id)}
                >
                  {selectedTemplate === template.id ? "Selected" : "Select"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
