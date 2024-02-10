# Dashboard Component

This React component is a dashboard that displays various data visualizations, including a line chart, a pie chart, and a table. It fetches data from external APIs and renders the charts and table dynamically.


## Clone the project using below Links
## frontend
      git clone https://github.com/NAVEED476/arab-ui.git
## backend 
      git clone https://github.com/NAVEED476/arab-microservice.git
## Features

- Displays a line chart using the Recharts library.
- Displays a pie chart using the MUI (Material-UI) x-charts library.
- Fetches data from external APIs to populate the charts and table.
- Provides a responsive layout that adjusts to different screen sizes.
- Utilizes loading spinners to indicate when data is being fetched.

## Usage

To use this component in your React application:

1. Copy the `Dashboard.js` file into your project's components directory.
2. Ensure you have installed the necessary dependencies:
   ```bash
   npm install recharts @mui/x-charts
   ```
3. Import the `Dashboard` component into your desired parent component.
4. Include the `Dashboard` component in your JSX markup.

```jsx

## API Endpoints

- Line Chart Data: `https://arab-ms.onrender.com/api/graph`
- Pie Chart Data: `https://arab-ms.onrender.com/api/pie-chart`
- Table Data: `https://arab-ms.onrender.com/api/table`

## Dependencies

- [Recharts](https://recharts.org/)
- [@mui/x-charts](https://mui.com/getting-started/installation/)
- React (assumed to be installed)

## Credits

This dashboard component was created by [Your Name] for demonstration purposes.

