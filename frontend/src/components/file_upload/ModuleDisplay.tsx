import { useState } from 'react';
import { Check, X, Clock } from 'lucide-react';

interface Module {
  id: string;
  icon_name: string;
  title: string;
  description: string;
  duration: string;
  priority: number;
  is_active?: boolean;
}

interface ModuleDisplayProps {
  modules: Module[];
  onRemoveModule: (id: string) => void;
  onPriorityChange: (id: string, priority: number) => void;
  onApproveAll: () => void;
}

const ModuleDisplay = ({ 
  modules, 
  onRemoveModule, 
  onPriorityChange, 
  onApproveAll 
}: ModuleDisplayProps) => {
  const [isApproved, setIsApproved] = useState(false);

  const handleApproveAll = () => {
    setIsApproved(true);
    onApproveAll();
  };

  // 1. First check if approved - show success message
  if (isApproved) {
    return (
      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="text-green-600" size={24} />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Success!</h3>
        <p className="text-green-700 text-lg">All modules are added in workspace.</p>
      </div>
    );
  }

  // 2. Check if no modules - show empty state
  if (modules.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No modules available. Please upload a file first.</p>
      </div>
    );
  }

  // 3. FINAL RETURN - Show modules one by one in a vertical list
  return (
    <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <span className="text-2xl mr-3">📚</span>
          Course Modules ({modules.length})
        </h2>
        
        <button
          onClick={handleApproveAll}
          className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
        >
          <Check size={20} />
          Approve All Modules
        </button>
      </div>

      {/* Vertical list of modules - one by one */}
      <div className="space-y-4">
        {modules.map((module) => (
          <div 
            key={module.id}
            className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              {/* Left side - Module content */}
              <div className="flex items-start space-x-4 flex-1">
                <div className="flex-shrink-0">
                  <span className="text-3xl">{module.icon_name}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {module.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {module.description}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      <span>{module.duration}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <label className="text-sm text-gray-600 font-medium">Priority:</label>
                      <input
                        type="number"
                        min="5"
                        max="10"
                        value={module.priority}
                        onChange={(e) => onPriorityChange(module.id, parseInt(e.target.value) || 5)}
                        className="w-16 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Remove button */}
              <div className="flex-shrink-0 ml-4">
                <button
                  onClick={() => onRemoveModule(module.id)}
                  className="flex items-center gap-2 px-3 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                >
                  <X size={18} />
                  <span className="text-sm font-medium">Remove</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleDisplay;