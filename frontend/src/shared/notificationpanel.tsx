import React from 'react';

interface NotificationPanelProps {
  color?: string; // Background color of the panel
  text: string;   // Text to display
  textColor?: string; // Color of the text
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({
  color = 'black',
  text,
  textColor = 'white'
}) => {
  return (
    <div
      style={{
        backgroundColor: color,
        color: textColor,
        padding: '10px 15px',
        borderRadius: '8px',
        margin: '10px 0',
        fontSize: '14px',
        fontWeight: '500',
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      {text}
    </div>
  );
};

export default NotificationPanel;
