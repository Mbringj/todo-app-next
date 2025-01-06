function TODOHero({todos_completed, total_todos}) {
  return (
    <section>
      <div>
        <p>Tache complete</p>
        <p>Continuez comme ça</p>
      </div>
      <div>
        {todos_completed}/{total_todos}
      </div>
    </section>
  )
}

export default TODOHero;