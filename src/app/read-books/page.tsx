'use client';
import { BooksContext } from '@/context/BooksContext';
import { Ibook } from '@/types/books.type';
import React, { useContext } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    BarShapeProps,
    LabelList,
    Label,
    LabelProps,
    Tooltip,
} from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'black'];
const getPath = (x: number, y: number, width: number, height: number) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};
const TriangleBar = (props: BarShapeProps) => {
    const { x, y, width, height, index } = props;

    const color = colors[index % colors.length];

    return (
        <path
            strokeWidth={props.isActive ? 5 : 0}
            d={getPath(Number(x), Number(y), Number(width), Number(height))}
            stroke={color}
            fill={color}
            style={{
                transition: 'stroke-width 0.3s ease-out',
            }}
        />
    );
};

const CustomColorLabel = (props: LabelProps) => {
    const fill = colors[(props.index ?? 0) % colors.length];
    return <Label {...props} fill={fill} />;
};

interface CustomXAxisTickProps {
    x?: number;
    y?: number;
    payload?: {
        value: string;
    };
}

const CustomXAxisTick = ({
    x = 0,
    y = 0,
    payload,
}: CustomXAxisTickProps) => {
    if (!payload) return null;

    const words = payload.value.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    words.forEach((word) => {
        if ((currentLine + ' ' + word).trim().length > 12) {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine += currentLine ? ` ${word}` : word;
        }
    });

    if (currentLine) {
        lines.push(currentLine);
    }

    return (
        <g transform={`translate(${x},${y})`}>
            {lines.map((line, index) => (
                <text
                    key={index}
                    x={0}
                    y={index * 15 + 15}
                    textAnchor="middle"
                    fill="#666"
                    fontSize={12}
                >
                    {line}
                </text>
            ))}
        </g>
    );
};
const ReadBooks = () => {
    const { readBooks } = useContext(BooksContext)

    // #region Sample data
    const data = readBooks.map((book: Ibook, index: number) => {
        return {
            name: book.bookName,
            uv: book.totalPages,
            pv: index + 1,
            amt: index + 1
        }
    })




    // #endregion

    return (
        <div className='container mx-auto my-5 flex justify-center'>
            
            {readBooks.length > 0 ?
                <BarChart
                    style={{ width: '100%', maxWidth: '1000px',height: '600px'}}
                    responsive
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        left: 0,
                        bottom: 60,
                    }}
                >
                    <CartesianGrid />
                    <Tooltip cursor={{ fillOpacity: 0.5 }} />
                    <XAxis
                        dataKey="name"
                        interval={0}
                        height={60}
                        tick={<CustomXAxisTick />}
                    />                <YAxis width="auto" />
                    <Bar dataKey="uv" shape={TriangleBar} activeBar>
                        <LabelList content={CustomColorLabel} position="top" />
                    </Bar>
                    {/* <RechartsDevtools /> */}
                </BarChart> : <p className='font-bold text-4xl text-center'>No read books to display</p>}
        </div>
    );
};

export default ReadBooks;