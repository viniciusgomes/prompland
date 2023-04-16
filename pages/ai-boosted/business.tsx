import { BackwardIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Layout from '../../components/base/layout';
import NavigationHome from '../../components/navbar/navigation-home';
import FooterHome from '../../components/footer/footer-home';

export default function Productivity() {
  const pageTitle = "AI-Boosted Business - Prompland";
  const pageDescription = "Leverage the power of AI to boost your business operations, drive growth, and stay ahead of the competition.";

  return (
    <Layout page={pageTitle} title={pageTitle} description={pageDescription}>
      {/* Header */}
      <NavigationHome />

      <main id="daily-life" className="isolate">
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div>
              <Link href="/" >
                <a className="flex items-center mb-6 text-gray-900">
                  <BackwardIcon className="mr-2 h-3 w-3" /> Back to Prompland
                </a>
              </Link>
            </div>
            <h1 className="text-4xl lg:text-6xl font-thin tracking-tight text-gray-800 text-center">
              AI-Boosted Business
            </h1>
            <div className=" py-12">

              <div className="lg:col-span-2">
                <div className="prose prose-indigo prose-lg text-gray-500">
                  {/* Add your desired content here */}
                  <p className="mt-6 text-md lg:text-lg text-gray-800 text-justify">
                    Leverage the power of AI to boost your business operations, drive growth, and stay ahead of the competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <FooterHome />
    </Layout>
  )
}
