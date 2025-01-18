"use client"

import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { Code, Server, Database, Palette, Globe, Cog } from 'lucide-react'

const skills = [
  { category: "Frontend", icon: Code, items: ['JavaScript', 'React', 'HTML', 'CSS', 'TypeScript', 'Next.js'] },
  { category: "Backend", icon: Server, items: ['Node.js', 'Express', 'Python', 'Django'] },
  { category: "Database", icon: Database, items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { category: "Design", icon: Palette, items: ['Figma', 'Adobe XD', 'Sketch'] },
  { category: "DevOps", icon: Globe, items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'] },
  { category: "Tools", icon: Cog, items: ['Git', 'Webpack', 'Babel', 'Jest'] },
]

function Cube() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        My Skills
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skillCategory, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <skillCategory.icon className="mr-2 h-5 w-5" />
                    {skillCategory.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      >
                        <Badge variant="secondary" className="text-sm py-1 px-2">{skill}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="h-[600px]"
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Interactive Skill Cube</CardTitle>
            </CardHeader>
            <CardContent className="h-[calc(100%-4rem)]">
              <Canvas>
                <Suspense fallback={null}>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <pointLight position={[-10, -10, -10]} />
                  <Cube />
                  <OrbitControls />
                </Suspense>
              </Canvas>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

