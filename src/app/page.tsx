import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <section className="w-full">
      <h1 className="head_text text-center">
        Task Management &nbsp;
        <span
          className="orange_gradient 
        text-center"
        >
          System
        </span>
      </h1>
      <p className="desc text-center">
        Task Manager provides information about hardware resource usage and
        performance as it relates to the system's individual apps and processes,
        including services.
      </p>
      <LoginForm />
    </section>
  );
}
