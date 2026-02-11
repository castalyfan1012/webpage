import ClientPage from './ClientPage';
import jsonData from "@/json/data.json";

// Helper function to create slug from title
function createSlug(title) {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}

// Server component - generates static params
export async function generateStaticParams() {
	return jsonData.Projects.map((project) => ({
		slug: project.slug || createSlug(project.title),
	}));
}

// Mark as statically generated
export const dynamic = 'force-static';

// Server component wrapper that passes params directly
export default async function Page({ params }) {
	const resolvedParams = await params;
	return <ClientPage params={resolvedParams} />;
}