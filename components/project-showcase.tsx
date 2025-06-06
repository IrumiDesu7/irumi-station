'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PROJECTS, type ProjectType, type ProjectStatus } from '@/contents'
import { useState, useEffect } from 'react'
import ProjectCard from './project-card'

export default function ProjectShowcase() {
  const [selectedType, setSelectedType] = useState<ProjectType | 'All'>('All')
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | 'All'>(
    'All',
  )
  const [isTransitioning, setIsTransitioning] = useState(false)

  const featuredProjects = PROJECTS.filter((project) => project.featured)

  const filteredProjects = PROJECTS.filter((project) => {
    const typeMatch = selectedType === 'All' || project.type === selectedType
    const statusMatch =
      selectedStatus === 'All' || project.status === selectedStatus
    return typeMatch && statusMatch
  })

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 300)
    return () => clearTimeout(timer)
  }, [selectedType, selectedStatus])

  const projectTypes: (ProjectType | 'All')[] = [
    'All',
    'Professional',
    'Freelance',
    'Personal',
  ]
  const projectStatuses: (ProjectStatus | 'All')[] = [
    'All',
    'Live',
    'In Development',
    // 'Completed',
  ]

  return (
    <section id='projects' className='space-y-12'>
      <div className='space-y-4 text-center'>
        <h2 className='text-3xl font-bold'>Projects</h2>
        <p className='text-muted-foreground mx-auto max-w-2xl'>
          A showcase of my professional work, freelance projects, and personal
          experiments. From modern web applications to enterprise-scale systems.
        </p>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className='space-y-6'>
          <h3 className='text-center text-xl font-semibold'>
            Featured Projects
          </h3>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        </div>
      )}

      {/* All Projects with Filters */}
      <div className='space-y-8'>
        <div className='space-y-4'>
          <h3 className='text-center text-xl font-semibold'>All Projects</h3>

          {/* Filter Controls */}
          <div className='flex flex-wrap justify-center gap-4'>
            <div className='space-y-2'>
              <h4 className='text-sm font-medium'>Type</h4>
              <div className='flex flex-wrap gap-2'>
                {projectTypes.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? 'default' : 'outline'}
                    size='sm'
                    className='rounded-full transition-all duration-200 ease-out hover:scale-105 active:scale-95'
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>

            <div className='space-y-2'>
              <h4 className='text-sm font-medium'>Status</h4>
              <div className='flex flex-wrap gap-2'>
                {projectStatuses.map((status) => (
                  <Button
                    key={status}
                    variant={selectedStatus === status ? 'default' : 'outline'}
                    size='sm'
                    className='rounded-full transition-all duration-200 ease-out hover:scale-105 active:scale-95'
                    onClick={() => setSelectedStatus(status)}
                  >
                    {status}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className='text-center'>
            <Badge
              variant='secondary'
              className={`rounded-full transition-all duration-300 ease-out ${
                isTransitioning
                  ? 'scale-95 opacity-50'
                  : 'scale-100 opacity-100'
              }`}
            >
              {filteredProjects.length} project
              {filteredProjects.length !== 1 ? 's' : ''} found
            </Badge>
          </div>
        </div>

        {/* Projects Grid */}
        <div
          className={`grid gap-6 transition-all duration-300 ease-out md:grid-cols-2 lg:grid-cols-3 ${
            isTransitioning
              ? 'translate-y-2 scale-95 transform opacity-0'
              : 'translate-y-0 scale-100 transform opacity-100'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className='transition-all duration-300 ease-out hover:scale-105'
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isTransitioning
                  ? 'none'
                  : 'fadeInUp 300ms ease-out forwards',
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div
            className={`py-12 text-center transition-all duration-300 ease-out ${
              isTransitioning
                ? 'translate-y-2 scale-95 transform opacity-0'
                : 'translate-y-0 scale-100 transform opacity-100'
            }`}
          >
            <p className='text-muted-foreground'>
              No projects found with the current filters.
            </p>
            <Button
              variant='outline'
              onClick={() => {
                setSelectedType('All')
                setSelectedStatus('All')
              }}
              className='mt-4 rounded-full transition-all duration-200 ease-out hover:scale-105 active:scale-95'
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
