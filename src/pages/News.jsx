import { useNewsArticles } from '../hooks/useNewsArticles'
import NewsCard from '../components/NewsCard'
import NewsSkeleton from '../components/NewsSkeleton'
import NewsError from '../components/NewsError'
import './News.css'
import PageMeta from '../components/PageMeta';

function News() {
  const { articles, loading, error, pagination, loadMore, refresh } = useNewsArticles(9)


  return (
    <div className="news-page" data-farbe="ocker">
      <PageMeta title="Aktuelles" description="Neuigkeiten aus der Astrid Lindgren Schule in Wien-Liesing." />
      <section className="news-hero">
        <div className="container">
          <h1>Aktuelles</h1>
          <p className="hero-subtitle">
            Bleiben Sie auf dem Laufenden über Neuigkeiten aus unserem Schulalltag
          </p>
        </div>
      </section>

      <section className="news-content section">
        <div className="container">
          {error ? (
            <NewsError onRetry={refresh} />
          ) : loading && articles.length === 0 ? (
            <NewsSkeleton count={9} />
          ) : articles.length === 0 ? (
            <div className="news-empty glass">
              <h2>Keine Neuigkeiten vorhanden</h2>
              <p>Derzeit sind keine News veröffentlicht.</p>
            </div>
          ) : (
            <>
              <div className="news-grid">
                {articles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>

              {pagination.hasMore && (
                <div className="news-load-more">
                  <button
                    onClick={loadMore}
                    disabled={loading}
                    className="btn btn-outline"
                  >
                    {loading ? 'Wird geladen...' : 'Mehr laden'}
                  </button>
                </div>
              )}
            </>
          )}

          {loading && articles.length > 0 && (
            <div className="news-loading-more">
              <div className="loading-spinner"></div>
              <span>Weitere Artikel werden geladen...</span>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default News
