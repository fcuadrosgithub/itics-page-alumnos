"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactoForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    matricula: "",
    correo: "",
    mensaje: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    try {
      // En una implementación real, aquí se enviaría el formulario a un endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setIsSuccess(true)
      toast({
        title: "Mensaje enviado",
        description: "Tu mensaje ha sido enviado correctamente. Te contactaremos pronto.",
      })

      // Resetear el formulario después de 2 segundos
      setTimeout(() => {
        setFormData({
          nombre: "",
          matricula: "",
          correo: "",
          mensaje: "",
        })
        setIsSuccess(false)
      }, 2000)
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Contacto</CardTitle>
          <CardDescription>
            Envíanos tus dudas, comentarios o sugerencias y te responderemos a la brevedad
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre completo</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  placeholder="Ingresa tu nombre completo"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="matricula">Matrícula</Label>
                <Input
                  id="matricula"
                  name="matricula"
                  placeholder="Ej. 20123456"
                  required
                  value={formData.matricula}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="correo">Correo electrónico</Label>
              <Input
                id="correo"
                name="correo"
                type="email"
                placeholder="tu.correo@ejemplo.com"
                required
                value={formData.correo}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensaje">Mensaje</Label>
              <Textarea
                id="mensaje"
                name="mensaje"
                placeholder="Escribe tu mensaje aquí..."
                rows={5}
                required
                value={formData.mensaje}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto transition-all" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Enviando...
                </span>
              ) : isSuccess ? (
                <span className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Enviado
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </span>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
