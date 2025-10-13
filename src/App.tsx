import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { SidebarModules, type ModuleType } from './components/SidebarModules';
import MainContent from './components/MainContent/MainContent';
import VoiceAssistant from './components/VoiceAssistant';
import NotesPanel from './components/NotesPanel';
import { 
  FiHome,
  FiCode,
  FiList,
  FiDatabase,
  FiLayers,
  FiFileText,
  FiAlertTriangle,
  FiCpu,
  FiGitBranch,
  FiServer
} from 'react-icons/fi';


const AppContainer = styled.div`
  display: flex;
  background: #000000;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 320px;
  margin-left: 280px;
  height: 100vh;
  overflow: hidden;
  background: #000000;
  gap: 0;
  padding: 0;
  box-sizing: border-box;
`;

const MainContentArea = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  background: #000000;
  padding: 0;
  box-sizing: border-box;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 10px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #334155;
    border-radius: 4px 0 0 4px;
    border: none;
    
    &:hover {
      background: #475569;
    }
  }
`;

const RightSidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #000000;
  border-left: 1px solid #333;
  box-sizing: border-box;
`;

const VoiceAssistantSection = styled.div`
  flex: 1;
  padding: 2rem 1rem;
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin: 1rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  
  /* Position the voice assistant button */
  & > div {
    margin-top: 3rem;
  }
`;

const NotesSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 50%;
  max-height: 50%;
  background: #ffffff;
  border-top: 1px solid #e5e7eb;
  margin-top: auto;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.05);
`;

const NotesHeader = styled.div`
  padding: 0.75rem 1.25rem;
  border-bottom: 1px solid #e5e7eb;
  background: #f9fafb;
  
  h3 {
    margin: 0;
    color: #4b5563;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<string>('python-basics');
  const [isListening, setIsListening] = useState<boolean>(false);
  const [showEditor, setShowEditor] = useState<boolean>(false);
  const [showTerminal, setShowTerminal] = useState<boolean>(false);

  const modules: ModuleType[] = useMemo(() => [
    {
      id: 'python-basics',
      label: 'Python Basics',
      icon: FiHome,
      badge: 'New',
      description: 'Master the fundamentals of Python programming language from the ground up.',
      content: [
        'Introduction to Python',
        'Variables and Data Types',
        'Basic Operators',
        'Input and Output',
        'String Formatting',
        'Comments and Docstrings',
        'Basic Math Operations',
        'Working with Numbers',
        'String Manipulation',
        'Type Conversion'
      ],
      snippet: '# Python basics example\nprint("Hello, World!")\nx = 5\ny = "Python"\nprint(f"{y} is {x} times better than other languages")',
      duration: '45 min',
      lastUpdated: '2023-10-10',
      exercises: 8,
      status: 'completed'
    },
    {
      id: 'data-types',
      label: 'Data Types',
      icon: FiList,
      description: 'Explore Python\'s built-in data types and how to work with them effectively.',
      content: [
        'Numeric Types',
        'Strings and String Methods',
        'Lists and List Operations',
        'Tuples and Immutability',
        'Dictionaries and Key-Value Pairs',
        'Sets and Set Operations',
        'Type Conversion',
        'Common Data Type Methods',
        {
          title: 'Strings',
          description: 'Strings are sequences of characters and are immutable in Python.',
          code: `# String creation
        greeting = "Hello, World!"
        name = 'Alice'
        
        # String operations
        full_greeting = greeting.substring(0, 5) + " " + name + "!"  // String concatenation
        const length = name.length;  // Get string length
        
        // String methods
        console.log(name.toUpperCase());        // "ALICE"
        console.log(greeting.toLowerCase());    // "hello, world!"
        console.log(greeting.split(","));      // ["Hello", " World!"]
        console.log("  Hello  ".trim());       // "Hello"
        
        // String formatting
        console.log(\`Hello, \${name}!\`);         // Template literals
        console.log("Hello, ".concat(name, "!")); // concat method`,
          explanation: 'Strings support many useful methods for manipulation. Remember that strings are immutable - methods return new string objects.'
        },
        {
          title: 'Lists and Tuples',
          description: 'Lists are ordered, mutable sequences, while tuples are ordered, immutable sequences.',
          code: '// Array (mutable)\nconst fruits = ["apple", "banana", "cherry"];\nfruits.push("orange");  // Add item\nfruits[1] = "mango";    // Modify item\n\n// Tuple (using TypeScript or const assertion)\nconst coordinates = [10, 20] as const;\n// coordinates[0] = 5;  // Error: Cannot assign to read only property\n\n// Array methods\nconst numbers = [3, 1, 4, 1, 5, 9, 2];\nconst sortedNumbers = [...numbers].sort((a, b) => a - b);  // Returns new sorted array\nconst reversedNumbers = [...numbers].reverse();  // Returns new reversed array\nconst count = numbers.filter(x => x === 1).length;  // Count occurrences\n\n// Array slicing\nconsole.log(numbers.slice(1, 4));  // Items 1 to 3\nconsole.log(numbers.filter((_, i) => i % 2 === 0));  // Every second item\nconsole.log([...numbers].reverse());  // Reverse array',
          explanation: 'Use lists when you need to modify the collection, and tuples when you need an immutable sequence.'
        },
        {
          title: 'Dictionaries',
          description: 'Dictionaries store key-value pairs and are mutable, unordered collections.',
          code: '# Dictionary creation\nperson = {\n    "name": "Alice",\n    "age": 25,\n    "city": "New York"\n}\n\n# Accessing and modifying\nprint(person["name"])  # Access value\nperson["age"] = 26     # Update value\nperson["email"] = "alice@example.com"  # Add new key-value pair\n\n# Dictionary methods\nkeys = person.keys()    # Get all keys\nvalues = person.values()  # Get all values\nitems = person.items()  # Get key-value pairs\n\n# Dictionary comprehension\nsquares = {x: x**2 for x in range(5)}  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}',
          explanation: 'Dictionaries are optimized for fast lookups by key. Keys must be immutable types (strings, numbers, tuples).'
        },
        {
          title: 'Sets',
          description: 'Sets are unordered collections of unique elements.',
          code: '# Set creation\nunique_numbers = {1, 2, 3, 4, 5, 5}  # {1, 2, 3, 4, 5}\n\n# Set operations\nprimes = {2, 3, 5, 7}\neven = {2, 4, 6, 8}\n\nprint(primes.union(even))         # {2, 3, 4, 5, 6, 7, 8}\nprint(primes.intersection(even))  # {2}\nprint(primes.difference(even))    # {3, 5, 7}\n\n# Set methods\nunique_numbers.add(6)     # Add element\nunique_numbers.remove(1)  # Remove element (raises error if not found)\nunique_numbers.discard(1) # Remove element (no error if not found)',
          explanation: 'Sets are useful for membership testing and eliminating duplicate entries. They support mathematical set operations.'
        }
      ],
      snippet: '# Python data types example\nnumbers = [1, 2, 3, 4, 5]\nnames = ("Alice", "Bob", "Charlie")\nperson = {"name": "Alice", "age": 25}\nunique_numbers = {1, 2, 3, 4, 5}',
      duration: '1 hour',
      lastUpdated: '2023-10-09',
      exercises: 10,
      status: 'in-progress'
    },
    {
      id: 'control-flow',
      label: 'Control Flow',
      icon: FiGitBranch,
      description: 'Master if statements, loops, and conditional logic in Python.',
      content: [
        'If, elif, else statements',
        'Comparison and logical operators',
        'For and while loops',
        'Break, continue, and pass statements',
        'List comprehensions',
        'Ternary operators'
      ],
      snippet: `# If-elif-else statement\nage = 18\n\nif age < 13:\n    print("Child")\nelif age < 20:\n    print("Teenager")\nelse:\n    print("Adult")\n\n# For loop\nfor i in range(5):\n    print(f"Number: {i}")\n\n# While loop\ncount = 5\nwhile count > 0:\n    print(count)\n    count -= 1`,
      duration: '1 hour',
      lastUpdated: '2023-10-08',
      exercises: 7,
      status: 'not-started'
    },
    {
      id: 'functions',
      label: 'Functions',
      icon: FiCode,
      description: 'Learn to create reusable code blocks with functions.',
      content: [
        'Defining and calling functions',
        'Parameters and return values',
        'Default arguments and keyword arguments',
        'Variable scope',
        'Lambda functions',
        'Recursion'
      ],
      snippet: `# Function definition\ndef greet(name, greeting="Hello"):\n    """Return a greeting message."""\n    return f"{greeting}, {name}!"\n\n# Function call\nmessage = greet("Alice")\nprint(message)  # Hello, Alice!\n\n# Lambda function\nadd = lambda x, y: x + y\nprint(add(5, 3))  # 8`,
      duration: '1 hour',
      lastUpdated: '2023-10-07',
      exercises: 8,
      status: 'not-started'
    },
    {
      id: 'data-structures',
      label: 'Data Structures',
      icon: FiDatabase,
      description: 'Master Python\'s built-in data structures.',
      content: [
        'Lists and list methods',
        'Tuples and immutability',
        'Dictionaries and their methods',
        'Sets and set operations',
        'List comprehensions',
        'Dictionary comprehensions'
      ],
      snippet: `# List operations\nfruits = ["apple", "banana", "cherry"]\nfruits.append("orange")\nfruits.insert(1, "mango")\n\n# Dictionary\nperson = {\n    "name": "Alice",\n    "age": 25,\n    "city": "New York"\n}\n\n# Set operations\nset1 = {1, 2, 3}\nset2 = {3, 4, 5}\nprint(set1.union(set2))  # {1, 2, 3, 4, 5}`,
      duration: '1.5 hours',
      lastUpdated: '2023-10-06',
      exercises: 9,
      status: 'not-started'
    },
    {
      id: 'file-handling',
      label: 'File Handling',
      icon: FiFileText,
      description: 'Learn to work with files in Python.',
      content: [
        'Opening and closing files',
        'Reading from files',
        'Writing to files',
        'Working with file paths',
        'Context managers (with statement)',
        'Working with CSV and JSON files'
      ],
      snippet: `# Writing to a file\nwith open('example.txt', 'w') as file:\n    file.write("Hello, World!\\n")\n    file.write("This is a test file.")\n\n# Reading from a file\nwith open('example.txt', 'r') as file:\n    content = file.read()\n    print(content)\n\n# Working with JSON\nimport json\n\ndata = {"name": "Alice", "age": 25}\nwith open('data.json', 'w') as file:\n    json.dump(data, file)`,
      duration: '1 hour',
      lastUpdated: '2023-10-05',
      exercises: 7,
      status: 'not-started'
    },
    {
      id: 'error-handling',
      label: 'Error Handling',
      icon: FiAlertTriangle,
      description: 'Learn to handle errors and exceptions in Python.',
      content: [
        'Try-except blocks',
        'Handling specific exceptions',
        'Finally and else clauses',
        'Raising exceptions',
        'Creating custom exceptions',
        'Exception hierarchy'
      ],
      snippet: `# Basic error handling\ntry:\n    result = 10 / 0\nexcept ZeroDivisionError as e:\n    print(f"Error: {e}")\nelse:\n    print("Division successful")\nfinally:\n    print("This always runs")\n\n# Custom exception\nclass ValueTooHighError(Exception):\n    pass\n\ndef check_value(x):\n    if x > 100:\n        raise ValueTooHighError("Value is too high")`,
      duration: '1 hour',
      lastUpdated: '2023-10-04',
      exercises: 6,
      status: 'not-started'
    },
    {
      id: 'modules-packages',
      label: 'Modules & Packages',
      icon: FiLayers,
      description: 'Organize your code with modules and packages.',
      content: [
        'Creating and importing modules',
        'The __name__ variable',
        'The Python Standard Library',
        'Installing packages with pip',
        'Creating packages',
        'Virtual environments'
      ],
      snippet: `# mymodule.py\ndef greet(name):\n    return f"Hello, {name}!"\n\n# main.py\nimport mymodule\nprint(mymodule.greet("Alice"))\n\n# Using from...import\nfrom mymodule import greet\nprint(greet("Bob"))\n\n# Installing packages\n# pip install requests\nimport requests\nresponse = requests.get("https://api.example.com")\nprint(response.status_code)`,
      duration: '1.5 hours',
      lastUpdated: '2023-10-03',
      exercises: 8,
      status: 'not-started'
    },
    {
      id: 'object-oriented',
      label: 'OOP in Python',
      icon: FiCpu,
      description: 'Master Object-Oriented Programming in Python.',
      content: [
        'Classes and objects',
        'Inheritance and polymorphism',
        'Encapsulation',
        'Magic methods',
        'Class vs instance variables',
        'Class methods and static methods'
      ],
      snippet: `class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        return "Some sound"\n\nclass Dog(Animal):\n    def speak(self):\n        return "Woof!"\n\n# Create instances\nanimal = Animal("Generic")\ndog = Dog("Buddy")\n\nprint(animal.speak())  # Some sound\nprint(dog.speak())     # Woof!`,
      duration: '2 hours',
      lastUpdated: '2023-10-02',
      exercises: 10,
      status: 'not-started'
    },
    {
      id: 'working-with-apis',
      label: 'Working with APIs',
      icon: FiServer,
      description: 'Learn to work with web APIs in Python.',
      content: [
        'Making HTTP requests',
        'Working with JSON data',
        'API authentication',
        'Handling API responses',
        'Rate limiting',
        'Error handling with APIs'
      ],
      snippet: `import requests\n\n# Make a GET request\nresponse = requests.get("https://api.github.com/users/octocat")\ndata = response.json()\n\nprint(f"Username: {data['login']}")\nprint(f"Name: {data.get('name', 'Not provided')}")\nprint(f"Bio: {data.get('bio', 'No bio available')}")\n\n# Example with error handling\ntry:\n    response = requests.get("https://api.github.com/nonexistent")\n    response.raise_for_status()  # Raises an HTTPError for bad responses\n    data = response.json()\nexcept requests.exceptions.RequestException as e:\n    print(f"Error making request: {e}")`,
      duration: '1.5 hours',
      lastUpdated: '2023-10-01',
      exercises: 7,
      status: 'not-started'
    }
  ], []);
  const activeModuleData = useMemo(() => {
    const foundModule = modules.find(module => module.id === activeModule);
    return foundModule || modules[0];
  }, [activeModule, modules]);

  const toggleVoiceAssistant = () => {
    setIsListening(prev => !prev);
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        {/* Left Sidebar - Course Modules */}
        <SidebarModules
          activeModule={activeModule}
          setActiveModule={setActiveModule}
          modules={modules}
        />
        
        <ContentWrapper>
          <MainContentArea>
            <MainContent 
              module={activeModuleData}
              showEditor={showEditor}
              showTerminal={showTerminal}
              onShowEditor={setShowEditor}
              _onShowTerminal={setShowTerminal}
              _isIntegratedTerminal={true}
              _onToggleTerminal={() => setShowTerminal(prev => !prev)}
            />
          </MainContentArea>
          
          {/* Right Sidebar */}
          <RightSidebar>
            {/* Top Half - Voice Assistant */}
            <VoiceAssistantSection>
              <VoiceAssistant 
                isListening={isListening}
                onToggle={toggleVoiceAssistant}
              />
            </VoiceAssistantSection>
            
            {/* Bottom Half - Notes */}
            <NotesSection>
              <NotesHeader>
                <h3>Notes</h3>
              </NotesHeader>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <NotesPanel 
                  isOpen={true}
                  onClose={() => {}}
                  hideHeader={true}
                />
              </div>
            </NotesSection>
          </RightSidebar>
        </ContentWrapper>
      </AppContainer>
    </>
  );
};

export default App;