import React from "react";
import {
	FaChevronDown,
	FaInbox,
	FaRegCalendar,
	FaRegCalendarAlt,
} from "react-icons/fa";
import { Tasks } from "../Tasks";

export const Sidebar = () => {
	return (
		<div className="sidebar" data-testid="sidebar">
			<ul className="sidebar__generic">
				<li className="inbox" data-testid="inbox">
					<span>
						<FaInbox />
					</span>
					<span>Inbox</span>
				</li>
				<li className="today" data-testid="today">
					<span>
						<FaRegCalendar />
					</span>
					<span>Today</span>
				</li>
				<li className="next_7" data-testid="next_7">
					<span>
						<FaRegCalendarAlt />
					</span>
					<span>Next 7 days</span>
				</li>
			</ul>
			<div className="sidebar__middle">
				<span>
					<FaChevronDown />
				</span>
				<h2>Projects</h2>
			</div>
			<ul className="sidebar__projects">Projects will be here</ul>
			Add Project Compoenet here!!
			<Tasks />
		</div>
	);
};
