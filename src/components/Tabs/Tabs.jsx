import { Tab } from './Tab';

export const Tabs = ({ tabs }) => (
  <ul>
    {tabs.map(tab => (
      <Tab key={tab.id} tab={tab} />
    ))}
  </ul>
);
