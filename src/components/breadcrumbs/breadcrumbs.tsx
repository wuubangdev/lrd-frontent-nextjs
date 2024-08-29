'use client'
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useRouter } from 'next/navigation';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
interface IBreadcrumb {
    title: string;
    link: string;
}

interface IProps {
    breadcrumb?: IBreadcrumb[];
}

export default function Breadcrumb(props: IProps) {
    const { breadcrumb } = props;
    const route = useRouter();
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                {breadcrumb && breadcrumb.map((item, i) => {
                    if (i === 0) {
                        return (
                            <Link
                                key={`breadcrumb-${i}`}
                                sx={{ cursor: "pointer" }}
                                underline="hover"
                                color="inherit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    route.push(item.link)
                                }}
                            >
                                {item.title}
                            </Link>
                        )
                    }
                    return (
                        <Link
                            key={`breadcrumb-${i}`}
                            underline="hover"
                            color="text.primary"
                            href="/material-ui/react-breadcrumbs/"
                            aria-current="page"
                            onClick={(e) => {
                                e.preventDefault();
                                route.push(item.link)
                            }}
                        >
                            {item.title}
                        </Link>
                    )
                })}
            </Breadcrumbs>
        </div>
    );
}