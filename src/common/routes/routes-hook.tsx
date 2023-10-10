import { useRoutes } from "react-router";
import IndexPage from "../../home/views/home";
import { ErrorPage } from "../components/ErrorPage";
import { TasksPage } from "../../tasks/views/tasks-list";
import { LoginPage } from "../../auth/views/login";
import { TaskPage } from "../../tasks/views/task-details";

export default function AppRoutes() {
    const routes = useRoutes([
        { path: "/", element: <IndexPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "*", element: <ErrorPage /> },
        {
            path: "/tasks",
            children: [
                {
                    index: true,
                    element: <TasksPage />,
                },
                {
                    path: ':id',
                    element: <TaskPage />
                }
            ]
        },
    ])

    return routes
}