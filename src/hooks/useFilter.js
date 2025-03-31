import { useCallback, useEffect, useMemo, useState } from 'react'
import careerdata from '../components/API/careerdata'

const useFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLocation, setSelectedLocation] = useState("All")
  const [selectedJobType, setSelectedJobType] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [appliedSearch, setAppliedSearch] = useState("")

  const allJobs = useMemo(() => careerdata.careers, []);

  const categories = useMemo(() => ["All", ...new Set(allJobs.map((job) => job.title))], [allJobs]);

  const locations = useMemo(() => ["All", ...new Set(allJobs.map((job) => job.location))], [allJobs]);

  const jobTypes = useMemo(() => ["All", ...new Set(allJobs.map((job) => job.job_type))], [allJobs]);

  const filteredJobs = useMemo(() => {
    return (allJobs.filter((job) => {
      const matchesCategory = selectedCategory === "All" || job.title === selectedCategory;
      const matchesLocation = selectedLocation === "All" || job.location === selectedLocation;
      const matchesJobType = selectedJobType === "All" || job.job_type === selectedJobType;
      const matchesSearch = job.title.toLowerCase().includes(appliedSearch.toLowerCase());

      return matchesCategory && matchesLocation && matchesJobType && matchesSearch;
    }))
  }, [allJobs, selectedCategory, selectedLocation, selectedJobType, appliedSearch])

  const applyFilter = useCallback(() => {
    setAppliedSearch(searchTerm)
  }, [searchTerm])
  
  useEffect(()=>{
    applyFilter("")
  })

  return {
    categories,
    locations,
    jobTypes,
    selectedCategory,
    setSelectedCategory,
    selectedLocation,
    setSelectedLocation,
    selectedJobType,
    setSelectedJobType,
    searchTerm,
    setSearchTerm,
    filteredJobs,
    applyFilter,
    allJobs
  }
}

export default useFilter
