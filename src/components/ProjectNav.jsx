import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { WORK } from "../constants";
import { Home, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import "./ProjectNav.css";

function ProjectNav({ currentProjectId }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Find current project index and adjacent projects
  const currentIndex = WORK.findIndex((p) => p.id === currentProjectId);
  const prevProject = currentIndex > 0 ? WORK[currentIndex - 1] : null;
  const nextProject =
    currentIndex < WORK.length - 1 ? WORK[currentIndex + 1] : null;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close dropdown when navigating
  const handleProjectClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="project-nav">
      {/* Home Button */}
      <Link to="/" className="project-nav-home">
        <Home size={16} />
        <span className="project-nav-home-text">Portfolio</span>
      </Link>

      {/* Navigation Controls */}
      <div className="project-nav-controls">
        {/* Previous Project */}
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.id}`}
            className="project-nav-prev"
            title={prevProject.title}
          >
            <ChevronLeft size={16} />
            <span className="project-nav-prev-text">{prevProject.title}</span>
          </Link>
        ) : (
          <span className="project-nav-prev project-nav-prev--disabled">
            <ChevronLeft size={16} />
            <span className="project-nav-prev-text">Previous</span>
          </span>
        )}

        {/* Projects Menu */}
        <div className="project-nav-menu-container">
          <button
            ref={menuButtonRef}
            className={`project-nav-menu ${isDropdownOpen ? "project-nav-menu--open" : ""}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            <span>All Projects</span>
            <ChevronDown size={16} className="project-nav-menu-icon" />
          </button>

          {isDropdownOpen && (
            <div ref={dropdownRef} className="project-nav-dropdown">
              {WORK.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className={`project-nav-dropdown-item ${
                    project.id === currentProjectId
                      ? "project-nav-dropdown-item--active"
                      : ""
                  }`}
                  onClick={handleProjectClick}
                >
                  {project.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Next Project */}
        {nextProject ? (
          <Link
            to={`/projects/${nextProject.id}`}
            className="project-nav-next"
            title={nextProject.title}
          >
            <span className="project-nav-next-text">{nextProject.title}</span>
            <ChevronRight size={16} />
          </Link>
        ) : (
          <span className="project-nav-next project-nav-next--disabled">
            <span className="project-nav-next-text">Next</span>
            <ChevronRight size={16} />
          </span>
        )}
      </div>
    </nav>
  );
}

export default ProjectNav;
