type Tab = {
  key: string;
  label: string;
};

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (key: string) => void;
  setOpenIndex: (index: number | null) => void;
}

const Tabs = ({ tabs, setActiveTab, setOpenIndex, activeTab }: TabsProps) => {
  return (
    <div className="flex items-center gap-8 flex-wrap justify-start">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => {
            setActiveTab(tab.key);
            setOpenIndex(null);
          }}
          className={`py-2 rounded-md transition-all duration-300 cursor-pointer ${
            activeTab === tab.key ? "font-bold" : "font-normal"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
