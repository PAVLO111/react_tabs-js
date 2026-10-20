import cn from 'classnames';
import { Tab } from './Tab';

export const Tabs = ({ tabs, activeTabId, setActiveTabId }) => (
  <ul>
    {tabs.map(tab => (
      <Tab
        key={tab.id}
        tab={tab}
        className={cn({
          'is-active': tab.id === activeTabId,
        })}
      />
    ))}
  </ul>
);
