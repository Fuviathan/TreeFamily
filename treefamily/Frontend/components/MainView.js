export default function MainView(props) {
  return (
    <main className="h-full m-8 bg-gray-300">
      <div className="h-full bg-white rounded-lg">
        {props.children}
      </div>
    </main>
  );
}
