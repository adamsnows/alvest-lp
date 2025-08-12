"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Snowflake, Wind, Wrench, Shield, Clock, Star, Menu, X, MessageCircle, ChevronRight, Zap, Award, Users } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function AlvestLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const whatsappNumber = "5584994854004"
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para serviços de refrigeração/ar condicionado."

  const openWhatsApp = (customMessage?: string) => {
    const message = customMessage || whatsappMessage
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 via-slate-900 via-blue-900 via-slate-900 to-slate-950"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-950/50 animate-pulse" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(51, 65, 85, 0.05) 2px, transparent 2px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
                  <Snowflake className="w-7 h-7 text-white animate-spin-slow" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Alvest
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['Início', 'Serviços', 'Sobre', 'Contato'].map((item, index) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="relative text-slate-300 hover:text-white transition-colors group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              <Button 
                onClick={() => openWhatsApp()}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-slate-800/50">
              <div className="flex flex-col space-y-4 pt-4">
                {['Início', 'Serviços', 'Sobre', 'Contato'].map((item) => (
                  <Link 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-300 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <Button 
                  onClick={() => openWhatsApp()}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white w-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        id="início" 
        className="relative min-h-screen flex items-center pt-20 pb-16 px-4"
      >

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up mt-10 lg:mt-0">
              <div className="space-y-6"> 
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm">
                  <Zap className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm text-blue-300">Tecnologia Avançada em Climatização</span>
                </div>
                
                
                                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                      Climatização
                    </span>
                    <br />
                 
                    <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent text-4xl md:text-6xl">
                      Premium
                    </span>
                  </h1>
                
                                  <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                    Revolucionamos o conceito de climatização em Natal e região, com eficiência energética incomparável trazendo conforto e qualidade de vida.
                  </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => openWhatsApp("Olá! Quero conhecer as soluções do futuro em climatização.")}
                  className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-6 text-lg shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2">Orçamento Gratuito</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => openWhatsApp("Preciso de atendimento de emergência!")}
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Emergência 24h
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm" />
                    ))}
                  </div>
                  <span className="text-slate-400">+500 clientes satisfeitos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-400">Registro CRT</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                
                {/* Main image container */}
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
                  <Image
                    src="/ac-installation-technician.png"
                    alt="Técnico da Alvest com tecnologia avançada"
                    width={600}
                    height={600}
                    className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating stats */}
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 shadow-2xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/25">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Garantia Premium</p>
                        <p className="text-sm text-slate-400">180 dias completos</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-6 -right-6 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl p-4 rounded-2xl border border-slate-700/50 shadow-2xl">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-blue-400" />
                      <span className="text-sm text-slate-300">+10 anos</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="relative py-24 px-4">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
              <Wind className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm text-blue-300">Soluções Completas</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Nossos Serviços
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Tecnologia de ponta aplicada em cada projeto, garantindo máxima eficiência 
              e sustentabilidade para seu ambiente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Snowflake className="w-8 h-8" />,
                title: "Instalação Premium",
                description: "Instalação com técnicos especializados com monitoramento contínuo",
                features: ["Atendimento personalizado", "Configuração de desempenho", "Eficiência A+++"],
                gradient: "from-blue-500 to-cyan-500",
                glowColor: "blue-500"
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Manutenção Preditiva",
                description: "Monitoramento 24/7 com IA para prevenir problemas antes que aconteçam.",
                features: ["Diagnostico remoto e presencial", "Alertas automáticos", "Manutenção preventiva"],
                gradient: "from-purple-500 to-pink-500",
                glowColor: "purple-500"
              },
              {
                icon: <Wind className="w-8 h-8" />,
                title: "Refrigeração Industrial",
                description: "Soluções robustas para grandes demandas com tecnologia sustentável.",
                features: ["Sistemas modulares", "Baixo consumo", "Controle preciso"],
                gradient: "from-green-500 to-emerald-500",
                glowColor: "green-500"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Suporte Instantâneo",
                description: "Atendimento 24/7 com realidade aumentada para diagnóstico remoto.",
                features: ["Diagnóstico remoto", "Resposta em 30min", "Técnicos especializados"],
                gradient: "from-orange-500 to-red-500",
                glowColor: "orange-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Garantia Premium",
                description: "Cobertura estendida com monitoramento contínuo e peças originais.",
                features: ["180 dias de garantia", "Peças originais", "Suporte vitalicio"],
                gradient: "from-indigo-500 to-blue-500",
                glowColor: "indigo-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Eficiência Energética",
                description: "Consultoria especializada para redução de até 60% no consumo energético.",
                features: ["Auditoria energética", "Projeto personalizado", "ROI garantido"],
                gradient: "from-yellow-500 to-orange-500",
                glowColor: "yellow-500"
              }
            ].map((service, index) => (
              <Card 
                key={index} 
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <CardContent className="relative p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-${service.glowColor}/25 group-hover:shadow-${service.glowColor}/40 transition-all duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <ChevronRight className={`w-4 h-4 text-${service.glowColor.split('-')[0]}-400 mr-3`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-${service.glowColor}/25 transition-all duration-300`}
                    onClick={() => openWhatsApp(`Olá! Gostaria de saber mais sobre ${service.title}.`)}
                  >
                    Solicitar Orçamento
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support Section */}
      <section id="sobre" className="relative py-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
                  <Shield className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-sm text-blue-300">Assistência Técnica Autorizada</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Assistência Técnica
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Especializada
                  </span>
                </h2>
                
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  Somos assistência técnica especializada e autorizada das principais marcas 
                  do mercado: <span className="text-blue-300 font-semibold">Gree</span>, <span className="text-green-300 font-semibold">Elgin</span> e <span className="text-orange-300 font-semibold">TCL</span>. 
                  Nossa certificação garante que você receba o melhor serviço com peças originais 
                  e garantia estendida.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { number: "500+", label: "Projetos Executados", icon: <Users className="w-6 h-6" /> },
                  { number: "15+", label: "Anos de Experiência", icon: <Award className="w-6 h-6" /> },
                  { number: "24/7", label: "Suporte Disponível", icon: <Clock className="w-6 h-6" /> },
                  { number: "100%", label: "Peças Originais", icon: <Shield className="w-6 h-6" /> }
                ].map((stat, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 text-center hover:scale-105 transition-transform duration-300">
                      <div className="flex justify-center mb-3 text-blue-400">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-slate-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
                  <Image
                    src="/placeholder-rwm7v.png"
                    alt="Assistência técnica autorizada Gree, Elgin e TCL - Alvest"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
              <MessageCircle className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-blue-300">Transforme Seu Ambiente Hoje</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                A climatização do seu
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ambiente em boas mãos!
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Junte-se a centenas de clientes que já experimentaram a revolução 
              em climatização. Orçamento gratuito e sem compromisso.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button 
                size="lg"
                onClick={() => openWhatsApp("Quero revolucionar minha climatização! Solicito orçamento.")}
                className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-10 py-6 text-lg shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                <span>Falar no WhatsApp</span>
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-10 py-6 text-lg backdrop-blur-sm hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Phone className="w-5 h-5 mr-2" />
                Ver Todos os Contatos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="relative py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
              <Phone className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm text-blue-300">Conecte-se Conosco</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Entre em Contato
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              Múltiplos canais para sua comodidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "WhatsApp",
                description: "Atendimento instantâneo",
                action: "Conversar Agora",
                gradient: "from-green-500 to-emerald-500",
                onClick: () => openWhatsApp()
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Telefone",
                description: "Ligue diretamente",
                action: "(84) 99485-4004",
                gradient: "from-blue-500 to-cyan-500",
                onClick: () => window.open('tel:+5584994854004')
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Emergência",
                description: "Suporte 24 horas",
                action: "(84) 99233-5218",
                gradient: "from-red-500 to-orange-500",
                onClick: () => openWhatsApp("EMERGÊNCIA! Preciso de atendimento urgente!")
              }
            ].map((contact, index) => (
              <Card 
                key={index} 
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                onClick={contact.onClick}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${contact.gradient} rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <CardContent className="relative p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-300 group-hover:scale-110`}>
                    <div className="text-white">
                      {contact.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {contact.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6">
                    {contact.description}
                  </p>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${contact.gradient} hover:shadow-lg transition-all duration-300`}
                  >
                    {contact.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Snowflake className="w-7 h-7 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Alvest
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Revolucionando a climatização com tecnologia de ponta e 
                sustentabilidade para um futuro mais confortável.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Soluções</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Instalação Inteligente</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Manutenção Preditiva</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Refrigeração Industrial</li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">Eficiência Energética</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Contato</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4 mr-3" />
                  (84) 9485-4004
                </li>
                <li className="flex items-center hover:text-green-400 transition-colors cursor-pointer" onClick={() => openWhatsApp()}>
                  <MessageCircle className="w-4 h-4 mr-3" />
                  WhatsApp 24h
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3" />
                  Rio Grande do Norte
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Conecte-se</h4>
              <Button 
                onClick={() => openWhatsApp()}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 w-full mb-4 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
              <p className="text-sm text-slate-400">
                Orçamento gratuito e consultoria especializada
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800/50 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Alvest. Todos os direitos reservados. Tecnologia que transforma.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
          <Button
            onClick={() => openWhatsApp()}
            className="relative bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full w-16 h-16 shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="w-8 h-8" />
          </Button>
        </div>
      </div>
    </div>
  )
}
