import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
});

const buttonStyle = 'w-[50%] max-w-[350px] uppercase font-semibold';

function App() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <p className="">Title1</p>
      </header>
    </div>
  );
}
