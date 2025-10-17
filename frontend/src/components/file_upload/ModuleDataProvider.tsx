import { useState } from 'react';
import FileUpload from './upload';
import ModuleDisplay from './ModuleDisplay';

interface Module {
  id: string;
  title: string;
  description: string;
  icon_name: string;
  duration: string;
  is_active: boolean;
  priority: number;
}

const ModuleDataProvider = () => {
  const [showModules, setShowModules] = useState(false);
  const [modules, setModules] = useState<Module[]>([]);

  // Sample Python modules data
  const pythonModules: Module[] = [
    {
      id: "1",
      title: "Python Basics",
      description: "Learn the fundamentals of Python programming",
      icon_name: "🐍",
      duration: "2 hours",
      is_active: true,
      priority: 5
    },
    {
      id: "2",
      title: "Data Structures",
      description: "Master lists, dictionaries, and more in Python",
      icon_name: "📊",
      duration: "3 hours",
      is_active: true,
      priority: 5
    },
    {
      id: "3",
      title: "Functions & Modules",
      description: "Learn to write reusable code with functions and modules",
      icon_name: "⚙️",
      duration: "2.5 hours",
      is_active: true,
      priority: 5
    },
    {
      id: "4",
      title: "Object-Oriented Programming",
      description: "Understand classes and objects in Python",
      icon_name: "🏗️",
      duration: "4 hours",
      is_active: true,
      priority: 5
    },
    {
      id: "5",
      title: "File Handling",
      description: "Work with files and directories in Python",
      icon_name: "📁",
      duration: "2 hours",
      is_active: true,
      priority: 6
    },
    {
      id: "6",
      title: "Error Handling",
      description: "Try-except blocks and exception handling",
      icon_name: "⚠️",
      duration: "1.5 hours",
      is_active: true,
      priority: 5
    }
  ];

  // Handle successful upload
  const handleUploadSuccess = () => {
    console.log('Upload successful, setting modules and showing module display');
    setModules([...pythonModules]);
    setShowModules(true);
  };

  // Handle module removal
  const handleRemoveModule = (moduleId: string) => {
    setModules(prev => prev.filter(module => module.id !== moduleId));
  };

  // Handle priority update
  const handlePriorityChange = (moduleId: string, newPriority: number) => {
    if (newPriority >= 5 && newPriority <= 10) {
      setModules(prev => 
        prev.map(module => 
          module.id === moduleId ? { ...module, priority: newPriority } : module
        )
      );
    }
  };

  // Handle approve all
  const handleApproveAll = () => {
    setShowModules(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* File Upload Component */}
        <FileUpload onUploadSuccess={handleUploadSuccess} />
        
        {/* Modules Display - Only show after successful upload */}
        {showModules && (
          <ModuleDisplay 
            modules={modules}
            onRemoveModule={handleRemoveModule}
            onPriorityChange={handlePriorityChange}
            onApproveAll={handleApproveAll}
          />
        )}
      </div>
    </div>
  );
};

export default ModuleDataProvider;