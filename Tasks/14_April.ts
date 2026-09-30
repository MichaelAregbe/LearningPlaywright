/*
1. Define interfaces for user data
id, name, occupation, email, status, age, location
getSalary(), getYearlyBonus(), gerRetirementSavings(), getPromotionEligibility()
2. Create interfaces with optional properties
3. Extend interfaces for inheritance
4. Implement interfaces in classes
*/

interface UserData {
    readonly employeeId: number;
    firstName: string;
    jobTitle: string;
    department: string;
    email?: string;
    salary?: number;
    startDate: Date;
    isFullTime: boolean;
    location?: string;
    isActive: boolean;
    managerId: number;
    profilePictureUrl?: string;


    getYearsOfService(): number;
    isManager(): boolean;
    getYearlyBonus(): number;
    getDepartmentBudget(): number;
    getPromotionEligibility(): boolean;
    isOnLeave(): boolean;
}

interface LeaveRecord {
    sickDays: number;
    vacationDays: number;
    parentalLeave: number;
}
interface PerformanceRecord {
    lastReviewDate: Date;
    reviewScore: number;
}
interface RemoteWorkProfile {
    isRemote: boolean;
    officeLocation: string;
    vpnAccess: boolean;
    equipmentProvided: boolean;
}



interface Manager extends UserData {
    teamSize: number;
    budgetLimit: number;
}
interface ITEmployee extends UserData {
    remoteWorkProfile: RemoteWorkProfile;
    securityClearance: boolean;
}
interface Contractor extends UserData {
    startDate: Date;
    endDate: Date;
    agencyName: string;
}

class PayrollService implements UserData {

    readonly employeeId: number;
    firstName: string;
    jobTitle: string;
    department: string;
    email?: string;
    salary?: number;
    startDate: Date;
    isFullTime: boolean;
    location?: string;
    isActive: boolean;
    managerId: number;
    profilePictureUrl?: string;

    constructor(
        employeeId: number,
        firstName: string,
        jobTitle: string,
        department: string,
        startDate: Date,
        isFullTime: boolean,
        managerId: number,
        isActive: boolean
    ) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.jobTitle = jobTitle;
        this.department = department;
        this.startDate = startDate;
        this.isFullTime = isFullTime;
        this.managerId = managerId;
        this.isActive = isActive;
    }

    // Implement methods from UserData interface
    getYearsOfService(): number {
        const today = new Date();
        const diffInMs = today.getTime() - this.startDate.getTime();
        const years = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
        return Math.floor(years);
    }

    isManager(): boolean {
        return this.jobTitle.toLowerCase().includes('manager');
    }

    getYearlyBonus(): number {
        if (this.salary) {
            const yearsOfService = this.getYearsOfService();
            const baseBonus = this.salary * 0.1;
            const experienceBonus = yearsOfService * 500;
            return baseBonus + experienceBonus;
        }
        return 0;
    }

    getDepartmentBudget(): number {
        // Example: Department budgets are only tracked for managers
        if (this.isManager() && this.salary) {
            return this.salary * 5;
        }
        return 0;
    }

    getPromotionEligibility(): boolean {
        const yearsOfService = this.getYearsOfService();
        const minYearsForPromotion = 3;
        return yearsOfService >= minYearsForPromotion && this.isActive && !this.isOnLeave();
    }

    isOnLeave(): boolean {
        // For this example, assume no one is on leave
        return false;
    }
}




