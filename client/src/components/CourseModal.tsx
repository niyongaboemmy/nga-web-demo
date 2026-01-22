import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, BarChart, Layout, Beaker, Tag, CheckCircle, GraduationCap, ChevronRight, BookOpen, Users, Award } from "lucide-react";

// Define the interface for the Course object
interface Course {
    title: string;
    code: string;
    desc: string;
    duration: string;
    level: string;
    modules: number;
    labs: number;
    tags: string[];
}

interface CourseModalProps {
    isOpen: boolean;
    onClose: () => void;
    course: Course | null;
}

const CourseModal: React.FC<CourseModalProps> = ({ isOpen, onClose, course }) => {
    if (!course) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] overflow-y-auto"
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[61] flex items-center justify-center p-4 md:p-6 pointer-events-none">

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 20 }}
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            className="bg-white dark:bg-gray-950 w-full max-w-5xl rounded-2xl shadow-2xl relative overflow-hidden flex flex-col pointer-events-auto border border-gray-200 dark:border-gray-800 max-h-[90vh] md:max-h-[85vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header Section */}
                            <div className="relative bg-gray-900 border-b border-gray-800 flex-shrink-0">
                                {/* Subtle Background Pattern */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black opacity-80"></div>
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>

                                <div className="relative px-8 py-8 md:py-10 z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                    <div className="space-y-4 max-w-3xl">
                                        <div className="flex items-center gap-3">
                                            <span className="px-3 py-1 rounded-md bg-white/10 backdrop-blur-md text-orange-400 text-xs font-bold tracking-widest uppercase border border-white/10">
                                                {course.code}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-gray-400 text-sm font-medium">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                Open for Registration
                                            </span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight">
                                            {course.title}
                                        </h2>
                                    </div>

                                    <button
                                        onClick={onClose}
                                        className="absolute top-6 right-6 md:static md:self-start bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white p-2.5 rounded-full transition-colors border border-white/5"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Scrollable Body */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar bg-gray-50 dark:bg-gray-950">
                                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-full">

                                    {/* Main Content (Left) */}
                                    <div className="lg:col-span-8 p-8 md:p-10 space-y-10 bg-white dark:bg-gray-950">

                                        {/* Description */}
                                        <section>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                                                <span className="p-1.5 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                                                    <BookOpen className="w-5 h-5" />
                                                </span>
                                                Course Overview
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg text-justify">
                                                {course.desc}
                                            </p>
                                        </section>

                                        {/* Skills / Tags */}
                                        <section>
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Skills You'll Gain</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {course.tags.map((tag, i) => (
                                                    <span key={i} className="px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-gray-800 flex items-center gap-2">
                                                        <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </section>

                                        {/* Curriculum Structure */}
                                        <section>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center gap-2">
                                                <span className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                                    <Layout className="w-5 h-5" />
                                                </span>
                                                Curriculum Structure
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                {/* Modules Card */}
                                                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h4 className="font-semibold text-gray-900 dark:text-gray-200">Theoretical Modules</h4>
                                                        <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold">
                                                            {course.modules} Units
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                                        Comprehensive study units covering core concepts, methodologies, and best practices.
                                                    </p>
                                                    <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                                                        <div className="bg-blue-500 h-full rounded-full" style={{ width: '60%' }}></div>
                                                    </div>
                                                </div>

                                                {/* Labs Card */}
                                                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h4 className="font-semibold text-gray-900 dark:text-gray-200">Practical Labs</h4>
                                                        <span className="px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 text-xs font-bold">
                                                            {course.labs} Sessions
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                                        Hands-on laboratory sessions to apply learned concepts in real-world scenarios.
                                                    </p>
                                                    <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                                                        <div className="bg-orange-500 h-full rounded-full" style={{ width: '80%' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                    </div>

                                    {/* Sidebar (Right) */}
                                    <div className="lg:col-span-4 bg-gray-50 dark:bg-gray-900/30 lg:border-l border-gray-200 dark:border-gray-800 p-8 md:p-10 flex flex-col gap-8">

                                        {/* Course Facts Card */}
                                        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                                            <div className="p-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20">
                                                <h4 className="font-bold text-gray-900 dark:text-gray-100">Course Details</h4>
                                            </div>
                                            <div className="p-6 space-y-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                                        <Clock className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wide">Duration</p>
                                                        <p className="font-semibold text-gray-900 dark:text-gray-200">{course.duration}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                                        <BarChart className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wide">Level</p>
                                                        <p className="font-semibold text-gray-900 dark:text-gray-200">{course.level}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                                        <Award className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wide">Certificate</p>
                                                        <p className="font-semibold text-gray-900 dark:text-gray-200">Yes, upon passing</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* What's Included */}
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-4">Included in this course</h4>
                                            <ul className="space-y-3">
                                                <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                                                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                                    <span>Access to all {course.modules} learning modules</span>
                                                </li>
                                                <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                                                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                                    <span>{course.labs} Guided practical lab sessions</span>
                                                </li>
                                                <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                                                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                                    <span>Expert mentorship and code review</span>
                                                </li>
                                                <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
                                                    <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                                    <span>NGA Community access</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="mt-auto pt-6">
                                            <button
                                                onClick={onClose}
                                                className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 font-bold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                            >
                                                Close Details
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CourseModal;
