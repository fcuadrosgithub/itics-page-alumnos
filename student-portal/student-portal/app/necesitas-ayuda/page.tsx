"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function NecesitasAyuda() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{10}$/
    return phoneRegex.test(phone.replace(/\s/g, ""))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio"
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Por favor ingresa un correo electrónico válido"
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El número de teléfono es obligatorio"
    } else if (!validatePhone(formData.telefono)) {
      newErrors.telefono = "Por favor ingresa un número de teléfono válido (10 dígitos)"
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitted(true)
      // Aquí se enviaría el formulario
      console.log("Formulario enviado:", formData)
    }
  }

  const resetForm = () => {
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    })
    setErrors({})
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-pink-200 shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="bg-pink-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-pink-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-pink-600 mb-2">¡Mensaje Enviado!</h2>
                <p className="text-gray-600 mb-6">
                  Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.
                </p>
                <Button onClick={resetForm} className="bg-pink-500 hover:bg-pink-600">
                  Enviar otro mensaje
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">¿Necesitas Ayuda?</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Estamos aquí para apoyarte. Envíanos tu consulta y nuestro equipo te responderá a la brevedad.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulario */}
          <Card className="border-2 border-pink-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50">
              <CardTitle className="text-pink-600">Formulario de Contacto</CardTitle>
              <CardDescription>Completa todos los campos para que podamos ayudarte de la mejor manera.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-gray-700 font-medium">
                  Nombre completo *
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className={`border-2 ${errors.nombre ? "border-red-300" : "border-gray-200"} focus:border-pink-400`}
                  placeholder="Tu nombre completo"
                />
                {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Correo electrónico *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`border-2 ${errors.email ? "border-red-300" : "border-gray-200"} focus:border-pink-400`}
                  placeholder="tu.email@ejemplo.com"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefono" className="text-gray-700 font-medium">
                  Número de teléfono *
                </Label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className={`border-2 ${errors.telefono ? "border-red-300" : "border-gray-200"} focus:border-pink-400`}
                  placeholder="1234567890"
                />
                {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje" className="text-gray-700 font-medium">
                  Mensaje *
                </Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  className={`border-2 ${errors.mensaje ? "border-red-300" : "border-gray-200"} focus:border-pink-400 min-h-[120px]`}
                  placeholder="Describe tu consulta o problema..."
                />
                {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje}</p>}
              </div>

              <Button onClick={handleSubmit} className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3">
                Enviar Mensaje
              </Button>
            </CardContent>
          </Card>

          {/* Información de contacto */}
          <div className="space-y-6">
            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-600">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-600"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Dirección</h3>
                    <p className="text-gray-600">
                      Paseo del Agrarismo 2000
                      <br />
                      Mixquiahuala, Hidalgo, México
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-600"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Teléfono</h3>
                    <p className="text-gray-600">(738) 972-4080</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-600"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">contacto@itsoeh.edu.mx</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-gray-700">Horarios de Atención</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Lunes - Viernes:</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sábados:</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Domingos:</span>
                    <span className="font-medium">Cerrado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
