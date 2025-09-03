import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { WORK, FEATURED_PROJECTS_CONFIG } from "../constants";
import {
  ChevronLeft,
  ChevronRight,
  Grid3x3,
  ArrowRight,
} from "lucide-react";

function ProjectSidebar({ currentProjectId }) {
  const location = useLocation();
  
  // Find current project index
  const currentIndex = WORK.findIndex(p => p.id === currentProjectId);
  const prevProject = currentIndex > 0 ? WORK[currentIndex - 1] : null;
  const nextProject = currentIndex < WORK.length - 1 ? WORK[currentIndex + 1] : null;

  // Determine featured projects (same logic as PortfolioFresh)
  const featuredProjects = useMemo(() => {
    let projects = WORK;
    
    // If showAll is true, return all projects
    if (FEATURED_PROJECTS_CONFIG.showAll) {
      return projects.slice(0, FEATURED_PROJECTS_CONFIG.maxFeatured);
    }
    
    // If featuredIds are specified, use those
    if (FEATURED_PROJECTS_CONFIG.featuredIds && FEATURED_PROJECTS_CONFIG.featuredIds.length > 0) {
      // Maintain the order of featuredIds
      const featuredMap = new Map();
      projects.forEach(p => {
        if (FEATURED_PROJECTS_CONFIG.featuredIds.includes(p.id)) {
          featuredMap.set(p.id, p);
        }
      });
      projects = FEATURED_PROJECTS_CONFIG.featuredIds
        .filter(id => featuredMap.has(id))
        .map(id => featuredMap.get(id));
    } else {
      // Otherwise, use the featured flag on each project
      projects = projects.filter(p => p.featured === true);
    }
    
    // Apply max limit
    return projects.slice(0, FEATURED_PROJECTS_CONFIG.maxFeatured);
  }, []);

  // Get older work (projects not in featured)
  const olderWork = useMemo(() => {
    const featuredIds = new Set(featuredProjects.map(p => p.id));
    return WORK.filter(p => !featuredIds.has(p.id));
  }, [featuredProjects]);

  const renderProjectItem = (project) => {
    const isActive = project.id === currentProjectId;
    return (
      <Link
        key={project.id}
        to={`/projects/${project.id}`}
        className={`
          block px-3 py-2 rounded-lg text-sm transition-all
          ${isActive 
            ? "bg-black/10 dark:bg-white/10 font-medium" 
            : "hover:bg-black/5 dark:hover:bg-white/5"
          }
        `}
      >
        <div className="flex items-start gap-2">
          <div className="mt-0.5">
            {isActive ? (
              <motion.div
                layoutId="activeIndicator"
                className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white"
              />
            ) : (
              <div className="w-1.5 h-1.5 rounded-full bg-black/20 dark:bg-white/20" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className={`truncate ${isActive ? "text-black dark:text-white" : "text-black/70 dark:text-white/70"}`}>
              {project.title}
            </div>
            {isActive && (
              <div className="text-xs text-black/50 dark:text-white/50 mt-0.5">
                Currently viewing
              </div>
            )}
          </div>
          {isActive && (
            <ArrowRight className="h-3 w-3 mt-1 opacity-50 shrink-0" />
          )}
        </div>
      </Link>
    );
  };

  return (
    <aside className="sticky top-24 h-fit">
      <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-black/10 dark:border-white/10">
          <h3 className="font-semibold text-sm flex items-center gap-2">
            <Grid3x3 className="h-4 w-4" />
            All Projects
          </h3>
        </div>

        {/* Projects List */}
        <div className="p-2 max-h-[60vh] overflow-y-auto">
          {/* Featured Work */}
          {featuredProjects.length > 0 && (
            <div className="mb-4">
              <div className="px-2 py-1">
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-black/10 dark:bg-white/10 text-black dark:text-white">
                  Featured Work
                </span>
              </div>
              <div className="mt-1">
                {featuredProjects.map(renderProjectItem)}
              </div>
            </div>
          )}

          {/* Older Work */}
          {olderWork.length > 0 && (
            <div className="mb-4">
              <div className="px-2 py-1">
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300">
                  Older Work
                </span>
              </div>
              <div className="mt-1">
                {olderWork.map(renderProjectItem)}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="p-3 border-t border-black/10 dark:border-white/10">
          <div className="flex gap-2">
            {prevProject ? (
              <Link
                to={`/projects/${prevProject.id}`}
                className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-sm"
              >
                <ChevronLeft className="h-3 w-3" />
                <span className="hidden lg:inline">Previous</span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            
            {nextProject ? (
              <Link
                to={`/projects/${nextProject.id}`}
                className="flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-sm"
              >
                <span className="hidden lg:inline">Next</span>
                <ChevronRight className="h-3 w-3" />
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ProjectSidebar;