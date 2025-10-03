export default function handler(req, res) {
    if (req.method === 'GET') {
        const features = [
            { id: 1, name: 'Feature 1', description: 'Descripción de la característica 1' },
            { id: 2, name: 'Feature 2', description: 'Descripción de la característica 2' },
            { id: 3, name: 'Feature 3', description: 'Descripción de la característica 3' }
        ];
        res.status(200).json(features);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}