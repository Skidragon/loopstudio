export default function Hamburger({ ...props }) {
  return (
    <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="#FFF" fill-rule="evenodd">
        <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
      </g>
    </svg>
  );
}