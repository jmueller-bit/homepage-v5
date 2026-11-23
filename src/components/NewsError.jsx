import './NewsError.css'

// Technische Fehlermeldung nur in der Konsole, Eltern sehen einen verständlichen Satz
function NewsError({ onRetry }) {
  return (
    <div className="news-error glass">
      <h2>Die Neuigkeiten konnten nicht geladen werden</h2>
      <p>Bitte versuchen Sie es in ein paar Minuten noch einmal.</p>
      {onRetry && (
        <button onClick={onRetry} className="btn btn-primary">
          Erneut versuchen
        </button>
      )}
    </div>
  )
}

export default NewsError
