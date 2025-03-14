import React from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Production' },
    position: { x: 0, y: 100 },
    className: 'bg-blue-100 border-2 border-blue-500 rounded-lg px-4 py-2',
  },
  {
    id: '2',
    data: { label: 'Distribution' },
    position: { x: 200, y: 0 },
    className: 'bg-green-100 border-2 border-green-500 rounded-lg px-4 py-2',
  },
  {
    id: '3',
    data: { label: 'Consumption' },
    position: { x: 400, y: 100 },
    className: 'bg-yellow-100 border-2 border-yellow-500 rounded-lg px-4 py-2',
  },
  {
    id: '4',
    data: { label: 'Collection' },
    position: { x: 200, y: 200 },
    className: 'bg-purple-100 border-2 border-purple-500 rounded-lg px-4 py-2',
  },
  {
    id: '5',
    type: 'output',
    data: { label: 'Recycling' },
    position: { x: 200, y: 100 },
    className: 'bg-red-100 border-2 border-red-500 rounded-lg px-4 py-2',
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e2-3', source: '2', target: '3', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e3-4', source: '3', target: '4', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e4-5', source: '4', target: '5', markerEnd: { type: MarkerType.ArrowClosed } },
  { id: 'e5-1', source: '5', target: '1', markerEnd: { type: MarkerType.ArrowClosed } },
];

export const CircularFlow: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Circular Economy Flow</h2>
      <div className="h-96">
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};