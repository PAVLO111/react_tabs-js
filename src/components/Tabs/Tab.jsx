export const Tab = ({ tab }) => (
  <li data-cy="Tab">
    <a href="#tab-2" data-cy="TabLink">
      {tab.title}
    </a>
  </li>
);
