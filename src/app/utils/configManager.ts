import { ProfileConfig, profilConfig } from "../../../profile.config";

class ConfigManager {
    private static instance: ConfigManager;
    private config: ProfileConfig;

    private constructor() {
        this.config = profilConfig;
    }

    public static getInstance(): ConfigManager {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }


    public getConfig(): ProfileConfig {
        return this.config;
    }
    public getProfile() {
        return this.config.profile;
    }

    public getSocialLinks() {
        return this.config.socialLinks;
    }

    public getSkills() {
        return this.config.skills;
    }

    public getAchievment() {
        return this.config.achievements;
    }

    public getProjects() {
        return this.config.projects;
    }

    public getSchools() {
        return this.config.schools;
    }

    public getJobs() {
        return this.config.jobs;
    }

    public getNavigation() {
        return this.config.navigation;
    }
}

export const configManager = ConfigManager.getInstance();
export const config = configManager;

export const getProfileData = () => configManager.getProfile();
export const getSocialLinks = () => configManager.getSocialLinks();
export const getSkills = () => configManager.getSkills();
export const getAchievements = () => configManager.getAchievment();
export const getProjects = () => configManager.getProjects();
export const getSchools = () => configManager.getSchools();
export const getJobs = () => configManager.getJobs();
export const getNavigation = () => configManager.getNavigation();

export default configManager;