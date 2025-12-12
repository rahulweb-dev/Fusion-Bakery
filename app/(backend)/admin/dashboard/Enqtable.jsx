'use client';

import dynamic from 'next/dynamic';
import { Box, Button, Select } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Parser } from "json2csv"; // ✅ FIXED CSV LIBRARY
import { FiRefreshCcw, FiSearch } from 'react-icons/fi';
import { ImSpinner } from 'react-icons/im';
import React, { useEffect } from 'react';

// Dynamically import MRT
const MaterialReactTable = dynamic(
  () => import('material-react-table').then((mod) => mod.MaterialReactTable),
  { ssr: false }
);

const EnqTable = ({
  data,
  columns,
  rangeValue,
  setRangeValue,
  dateRange,
  setDateRange,
  refreshing,
  setRefreshing,
  loading,
}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setRefreshing(!refreshing);
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ New working CSV export function
  const handleExportData = () => {
    if (!data || data.length === 0) return;

    const parser = new Parser();
    const csv = parser.parse(data);

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleRefreshData = () => setRefreshing(!refreshing);

  // Reset dateRange when not using BETWEEN
  useEffect(() => {
    if (rangeValue !== 'Between') {
      setDateRange({ startDate: '', endDate: '' });
      if (rangeValue === 'allData') {
        setRefreshing(!refreshing);
      }
    }
  }, [rangeValue]);

  // Filter Data
  const filteredData = React.useMemo(() => {
    if (!data || !data.length) return [];

    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    return data.filter((row) => {
      const rowDate = new Date(row.date);

      switch (rangeValue) {
        case 'allData':
          return true;
        case 'today':
          return rowDate.toDateString() === today.toDateString();
        case 'yesterday':
          return rowDate.toDateString() === yesterday.toDateString();
        case 'thisMonth':
          return (
            rowDate.getMonth() === today.getMonth() &&
            rowDate.getFullYear() === today.getFullYear()
          );
        case 'lastMonth': {
          const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
          return (
            rowDate.getMonth() === lastMonth.getMonth() &&
            rowDate.getFullYear() === lastMonth.getFullYear()
          );
        }
        case 'last3Months': {
          const threeMonthsAgo = new Date(today);
          threeMonthsAgo.setMonth(today.getMonth() - 3);
          return rowDate >= threeMonthsAgo && rowDate <= today;
        }
        case 'last6Months': {
          const sixMonthsAgo = new Date(today);
          sixMonthsAgo.setMonth(today.getMonth() - 6);
          return rowDate >= sixMonthsAgo && rowDate <= today;
        }
        case 'last12Months': {
          const twelveMonthsAgo = new Date(today);
          twelveMonthsAgo.setFullYear(today.getFullYear() - 1);
          return rowDate >= twelveMonthsAgo && rowDate <= today;
        }
        case 'Between':
          if (!dateRange.startDate || !dateRange.endDate) return false;
          const start = new Date(dateRange.startDate);
          const end = new Date(dateRange.endDate);
          return rowDate >= start && rowDate <= end;

        default:
          return true;
      }
    });
  }, [data, rangeValue, dateRange]);

  return (
    <Box sx={{ overflow: 'hidden', boxShadow: 'none', borderRadius: '4px', position: 'relative' }}>
      
      {loading && (
        <div className='flex justify-center items-center h-[calc(100%-34px)] gap-3 absolute top-0 left-0 w-full z-10 bg-opacity-10 text-primaryBlue'>
          <ImSpinner className='text-3xl animate-spin' />
          <span className='text-xl'>Loading...</span>
        </div>
      )}

      <MaterialReactTable
        columns={columns}
        data={filteredData}
        enableBottomToolbar
        enableStickyHeader
        enableStickyFooter
        enablePagination
        initialState={{
          density: 'compact',
          pagination: { pageIndex: 0, pageSize: 15 },
        }}
        renderTopToolbarCustomActions={() => (
          <Box sx={{ display: 'flex', gap: '16px', flexWrap: 'wrap', mt: 1, mb: 1 }}>

            {/* Date Filters */}
            <Select
              native
              value={rangeValue}
              onChange={(e) => setRangeValue(e.target.value)}
              className='p-1 h-9'
              style={{ color: '#303a9b' }}
            >
              <option value='allData'>All Data</option>
              <option value='today'>Today</option>
              <option value='yesterday'>Yesterday</option>
              <option value='thisMonth'>This Month</option>
              <option value='lastMonth'>Last Month</option>
              <option value='last3Months'>Last 3 Months</option>
              <option value='last6Months'>Last 6 Months</option>
              <option value='last12Months'>Last 12 Months</option>
              <option value='Between'>Between Dates</option>
            </Select>

            {rangeValue === 'Between' && (
              <form onSubmit={handleSubmit} className='flex gap-2'>
                <input type='date' name='startDate' value={dateRange.startDate} onChange={handleDateChange} className='border rounded-md px-4 py-1.5' />
                <input type='date' name='endDate' value={dateRange.endDate} onChange={handleDateChange} className='border rounded-md px-4 py-1.5' />
                <button type='submit' className='flex items-center gap-2 px-4 py-1 text-white bg-primaryBlue rounded-lg'>
                  <FiSearch /> Search
                </button>
              </form>
            )}

            {/* Refresh */}
            <Button
              onClick={handleRefreshData}
              startIcon={<FiRefreshCcw />}
              variant='outlined'
              style={{ borderColor: '#303a9b', color: '#303a9b', height: '35px' }}
            >
              Refresh
            </Button>

            {/* Export */}
            <Button
              onClick={handleExportData}
              startIcon={<FileDownloadIcon />}
              variant='contained'
              style={{ backgroundColor: '#303a9b', color: 'white', height: '35px' }}
            >
              Export
            </Button>

          </Box>
        )}
      />
    </Box>
  );
};

export default EnqTable;
