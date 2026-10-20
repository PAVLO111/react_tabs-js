export const Tab = ({ tab }) => (
  <li data-cy="Tab">
    <a href={`#${tab.id}`} data-cy="TabLink">
      {tab.title}
    </a>
  </li>
);
