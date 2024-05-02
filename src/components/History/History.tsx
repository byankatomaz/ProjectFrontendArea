import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Title", "Year", "Status", ""];

const TABLE_ROWS = [
    {
        title: "Name Example",
        year: "2020",
        status: "Closed",
    },
    {
        title: "Name Example",
        year: "2020",
        status: "Closed",
    },
    {
        title: "Name Example",
        year: "2020",
        status: "Closed",
    },
    {
        title: "Name Example",
        year: "2020",
        status: "Closed",
    },
    {
        title: "Name Example",
        year: "2020",
        status: "Closed",
    },
];


export function History() {
    return (
        <Card className="h-full w-full overflow-scroll mt-3">
            <div className="flex justify-center py-5">
                <h1 className="text-black text-lg font-semibold">Historicos de Breakdown</h1>
            </div>

            <table className="w-full min-w-max table-auto text-left ">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {TABLE_ROWS.map(({ title, year, status }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                        return (
                            <tr key={title}>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {title}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {year}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {status}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        as="a"
                                        href="#"
                                        variant="small"
                                        color="blue-gray"
                                        className="font-medium"
                                    >
                                        Edit
                                    </Typography>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}