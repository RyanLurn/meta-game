CREATE TABLE `quest` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`deadline` integer NOT NULL,
	`reward` integer NOT NULL,
	`importance` integer NOT NULL,
	`urgency` integer NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
