"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { Camera, Code, Coffee, Headphones, Book, Plane } from 'lucide-react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        About Me
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Professional+Photo"
                alt="Professional Photo"
                width={600}
                height={400}
                className="rounded-lg mb-4 w-full h-auto"
              />
              <h2 className="text-2xl font-bold mb-2">John Doe</h2>
              <p className="text-muted-foreground">Full Stack Developer</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardContent className="prose dark:prose-invert max-w-none p-6">
              <p>
                Hello! I'm John Doe, a passionate Full Stack Developer with 5 years of experience in creating responsive, user-friendly websites and applications using modern technologies.
              </p>
              <p>
                My journey in web development started with a curiosity for how things work on the internet. Since then, I've worked on a variety of projects, from small business websites to large-scale web applications.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the great outdoors.
              </p>
              <h3 className="text-xl font-semibold mt-4 mb-2">Hobbies & Interests</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Camera, label: "Photography" },
                  { icon: Code, label: "Coding" },
                  { icon: Coffee, label: "Coffee" },
                  { icon: Headphones, label: "Music" },
                  { icon: Book, label: "Reading" },
                  { icon: Plane, label: "Travel" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <item.icon className="h-8 w-8 mb-2" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8"
      >
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Image
                src="/placeholder.svg?height=200&width=300&text=Journey+Image+1"
                alt="Journey Image 1"
                width={300}
                height={200}
                className="rounded-lg w-full h-auto"
              />
              <Image
                src="/placeholder.svg?height=200&width=300&text=Journey+Image+2"
                alt="Journey Image 2"
                width={300}
                height={200}
                className="rounded-lg w-full h-auto"
              />
              <Image
                src="/placeholder.svg?height=200&width=300&text=Journey+Image+3"
                alt="Journey Image 3"
                width={300}
                height={200}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

