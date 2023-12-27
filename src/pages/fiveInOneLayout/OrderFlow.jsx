// OrderStatusFlow.js
import React from 'react';
import ReactFlow from 'reactflow';

const OrderStatusFlow = ({ orderStatus }) => {
  const elements = [
    { id: 'orderPlaced', data: { label: 'Order Placed' }, position: { x: 0, y: 0 } },
    { id: 'processing', data: { label: 'Processing' }, position: { x: 150, y: 0 } },
    { id: 'dispatched', data: { label: 'Dispatched' }, position: { x: 300, y: 0 } },
    { id: 'outForDelivery', data: { label: 'Out for Delivery' }, position: { x: 450, y: 0 } },
    { id: 'delivered', data: { label: 'Delivered' }, position: { x: 600, y: 0 } },
  ];

  const onLoad = (reactFlowInstance) => {
    // Do something when the flow is loaded (if needed)
  };

  return (
    <ReactFlow elements={elements} onLoad={onLoad} />
  );
};

export default OrderStatusFlow;
