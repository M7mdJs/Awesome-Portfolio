"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Code, Briefcase } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'Next.js']
  const featuredProjects = [
    { title: 'E-commerce Platform', tech: ['React', 'Node.js', 'MongoDB'] },
    { title: 'Task Management App', tech: ['Vue.js', 'Express', 'PostgreSQL'] },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="relative w-48 h-48 mx-auto mb-8">
          <Image
            src="/placeholder.svg?height=192&width=192&text=Your+Photo"
            alt="Profile Picture"
            layout="fill"
            className="rounded-full border-4 border-primary"
          />
        </div>
        <h1 className="text-5xl font-bold mb-4">Hello, I'm John Doe</h1>
        <p className="text-2xl mb-8 text-muted-foreground">Full Stack Developer passionate about creating amazing web experiences.</p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button size="lg" className="animate-bounce">
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Code className="mr-2 h-5 w-5" />
              Skills Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary">{skill}</Badge>
              ))}
            </div>
            <Button asChild className="mt-4">
              <Link href="/skills">View All Skills</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Briefcase className="mr-2 h-5 w-5" />
              Featured Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            {featuredProjects.map((project, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>
            ))}
            <Button asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

