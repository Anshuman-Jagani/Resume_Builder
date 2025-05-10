const fs = require("node:fs");
const path = require("node:path");
const Resume = require("../models/Resume");
const { Certificate } = require("node:crypto");

//@desc Create a new Resume
//@route POST /api/resume
//@acccess Private
const createResume = async (req, res) => {
    try {
        
        const { title } = req.body;

        //Default Templates
        const defaultResumeData = {
            profileInfo: {
                profileImg: null,
                previewUrl: "",
                fullName: "",
                designation: "",
                summary: "", 
            },
            contactInfo: {
                email: "",
                phone: "",
                location: "",
                linkedin: "",
                github: "",
                website: "",
            },
            workExperience: [
                {
                    company: "",
                    role: "",
                    startDate: "",
                    endDate: "",
                    description: ""
                },
            ],
            education: [
                {
                    degree: "",
                    institution: "",
                    startDate: "",
                    endDate: "",
                },
            ],
            skills: [
                {
                    name: "",
                    progress: 0,
                },
            ],
            projects: [
                {
                    title: "",
                    description: "",
                    github: "",
                    liveDemo: "",
                },
            ],
            certifications: [
                {
                    title: "",
                    issuer: "",
                    year: "",
                },
            ],
            languages: [
                {
                    name: "",
                    progress: 0,
                },
            ],
            interests: [""],
        };

        const newResume = await Resume.create({
            userId: req.user._id,
            title,
            ...defaultResumeData,
        });

        res.status(201).json(newResume);
    } catch (error) {
        res
            .status(500)
            .json({ message: "Failed to create resume", error: error.message });
    }
};

//@desc Get all Resume for Logged-in user
//@route GET /api/resume
//@access Private
const getUserResumes = async (req, res) => {
    try {
        const resume = await Resume.find({userId: req.user._id}).sort({
            updatedAt: -1,
        });
        res.json(resume);
    } catch (error) {
        res
            .status(500)
            .json({ message: "Failed to create resume", error: error.message });
    }
};

// @desc Get single resume by ID
// @route GET /api/resumes/:id
// @access Private
const getResumeById = async (req, res) => {
    try {
        const resume = await Resume.findOne({_id: req.params.id, userId: req.user._id});

        if(!resume){
            return res.status(404).json({message: "Resume not Found"});
        }

        res.json(resume);
    } catch (error) {
        res
            .status(500)
            .json({ message: "Failed to create resume", error: error.message });
    }
};

// @desc Update a resume
// @route PUT /api/resumes/:id
// @access Private
const updateResume = async (req, res) => {
    try {
        const resume = await Resume.findOne({
            _id: req.params.id,
            userId: req.user._id,
        });

        if(!resume){
            return res.status(404).json({ message: "Resume not found or Unauthorized." });
        }

        // Merge Updates from req.body into existing resume
        Object.assign(resume, req.body);

        // Save Updated resume
        const savedResume = await resume.save();

        res.json(savedResume); 
    } catch (error) {
        res
            .status(500)
            .json({ message: "Failed to create resume", error: error.message });
    }
};

// @desc Delete a resume
// @route DELETE /api/resumes/:id
// @access Private
const deleteResume = async (req, res) => {
    try {
        const resume = await Resume.findOne({
            _id: req.params.id,
            userId: req.user._id,
        });

        if(!resume){
            return res.status(404).json({ message: "Resume not found or Unauthorized." });
        }

        // Delete thumbnailLink and profilePreviewUrl images from uploads folder
        const uploadFolder = path.join(__dirname, "..", 'uploads');
        const baseUrl = `${req.protocol}://${req.get("host")}`;

        if(resume.thumnailLink) {
            const oldThumbnail = path.join(uploadFolder, path.basename(resume.thumnailLink));
            if (fs.existsSync(oldThumbnail)) fs.unlinkSync(oldThumbnail);
        }

        if(resume.profileInfo?.profilePreviewUrl){
            const oldProfile = path.join(uploadFolder, path.basename(resume.profileInfo.profilePreviewUrl));
            if (fs.existsSync(oldProfile)) fs.unlinkSync(oldProfile);
        }

        const deleted = await Resume.findOneAndDelete({
            _id: req.params.id,
            userId: req.user._id,
        });

        if(!deleted) {
            return res.status(404).json({ message: "Resume not found or Unauthorized" });
        }

        res.json({ message: "Resume Deleted Successfully" });
    } catch (error) {
        res
            .status(500)
            .json({ message: "Failed to create resume", error: error.message });
    }
};

module.exports = {
    createResume,
    getUserResumes,
    getResumeById,
    updateResume,
    deleteResume,
};