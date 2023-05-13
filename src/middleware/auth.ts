import { Request, Response, NextFunction } from 'express';

export function authorizeRoles(...roles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        // @ts-ignore
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'Access denied' });
        }
        next();
    };
}
