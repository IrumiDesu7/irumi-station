import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Project } from '@/contents'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

interface ProjectCardProps {
  project: Project
  featured?: boolean
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const statusColors = {
    'Live': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    'In Development': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    'Completed': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
  }

  const typeColors = {
    'Professional': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    'Freelance': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
    'Personal': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  }

  return (
    <Card className={`h-full ${featured ? 'ring-2 ring-primary' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className={featured ? 'text-lg' : 'text-base'}>
              {project.title}
            </CardTitle>
            <div className="flex gap-2">
              <Badge className={statusColors[project.status]} variant="secondary">
                {project.status}
              </Badge>
              <Badge className={typeColors[project.type]} variant="secondary">
                {project.type}
              </Badge>
              {featured && (
                <Badge variant="default">Featured</Badge>
              )}
            </div>
          </div>
        </div>
        <CardDescription className="text-sm">
          {project.description}
        </CardDescription>
        <div className="text-xs text-muted-foreground">
          {project.period}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {project.longDescription && featured && (
          <p className="text-sm text-muted-foreground">
            {project.longDescription}
          </p>
        )}

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-1">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Key Highlights</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              {project.highlights.slice(0, featured ? 4 : 2).map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {project.metrics && (
            <div>
              <h4 className="text-sm font-medium mb-2">Metrics</h4>
              <div className="grid grid-cols-2 gap-2">
                {project.metrics.map((metric, index) => (
                  <div key={index} className="text-center p-2 bg-muted rounded">
                    <div className="text-lg font-bold text-primary">
                      {metric.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        {project.url && (
          <Button asChild size="sm" className="flex-1">
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Site
            </Link>
          </Button>
        )}
        {project.githubUrl && (
          <Button asChild variant="outline" size="sm" className="flex-1">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-1" />
              Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}