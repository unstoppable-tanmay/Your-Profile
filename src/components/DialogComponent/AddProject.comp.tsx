import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Chips from "../SmallComponents/Chips.comp";
import { findMostMatchingWord } from "@/lib/createProfileHelper";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export type projectType = {
  name: string;
  details: string;
  type: string;
  stack: string[];
  link: string;
};

const AddProject = ({
  projects,
  setProjects,
  showProjects = false,
  setClose,
}: {
  projects: projectType[];
  setProjects: Dispatch<SetStateAction<projectType[]>>;
  showProjects?: boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        onClick={(e) => {
          setClose(false);
          e.stopPropagation();
        }}
        className="absolute top-0 bg-def_rose rounded-full my-16 cursor-pointer duration-200 text-white p-3 z-[200]"
      >
        <IoClose />
      </div>
      <motion.div
        layout
        className="w-full flex flex-col items-center self-center overflow-y-scroll max-h-screen py-[20vh] no-scrollbar relative"
      >
        {projects.length == 0 && <div className="">No Projects Found</div>}
        {projects.map((project, index) => {
          return (
            <>
              <ProjectCard
                key={index}
                close={showProjects ? false : true}
                index={index}
                projects={projects}
                setProjects={setProjects}
                showing={showProjects}
              />
              {!showProjects && index < 2 && (
                <div className="line w-3 h-5 bg-def_blue_gray_light flex-shrink-0"></div>
              )}
              {showProjects && index < projects.length - 1 && (
                <div className="line w-3 h-5 bg-def_blue_gray_light flex-shrink-0"></div>
              )}
            </>
          );
        })}
        {projects.length < 3 && !showProjects && (
          <ProjectCard
            close={false}
            index={projects.length}
            projects={projects}
            setProjects={setProjects}
          />
        )}
      </motion.div>
    </div>
  );
};

const ProjectCard = ({
  close,
  index,
  projects,
  setProjects,
  showing = false,
}: {
  close: boolean;
  index: number;
  projects: projectType[];
  setProjects: Dispatch<SetStateAction<projectType[]>>;
  showing?: boolean;
}) => {
  const [projectDetails, setProjectDetails] = useState<projectType>(
    projects[index]
      ? {
          name: projects[index].name,
          details: projects[index].details,
          type: projects[index].type,
          stack: projects[index].stack,
          link: projects[index].link,
        }
      : { name: "", details: "", type: "", stack: [], link: "" }
  );
  const [ProjectStack, setProjectStack] = useState<string>();
  const [open, setOpen] = useState(!close);

  const AddProject = () => {
    if (
      projects.length < 3 &&
      projectDetails.details &&
      projectDetails.link &&
      projectDetails.name &&
      projectDetails.stack &&
      projectDetails.type
    ) {
      setProjects([...projects, projectDetails]);
      setProjectDetails({
        name: "",
        details: "",
        type: "",
        stack: [],
        link: "",
      });
    } else alert("Fill The All Details");
  };

  const removeElementAtIndex = (array: projectType[], index: number) =>
    array.filter((_, i) => i !== index);

  return showing ? (
    <div className="flex flex-col self-start gap-3 w-[400px] max-w-[80vw] bg-def_blue_gray_light rounded-[10px] p-4 shadow-md font-FiraMono">
      <div className="flex items-center justify-between">
        <div className="ProjectName text-base">{projectDetails.name}</div>
        <div className="ProjectType text-xs">{projectDetails.type}</div>
      </div>
      <div className="ProjectDetails text-xs text-def_white/50">
        {projectDetails.details}
      </div>
      <div className="ProjectStack flex gap-2">
        {projectDetails.stack.map((ele, ind) => {
          return <Chips size="xs" bg="bg-white" text={ele} key={ind} />;
        })}
      </div>
      <Link
        href={projectDetails.link}
        className="link text-xs text-blue-400 cursor-pointer"
      >
        {projectDetails.link}
      </Link>
    </div>
  ) : (
    <motion.div
      layout
      className={`p-3 ${
        open ? "rounded-[10px] w-auto" : "rounded-full"
      } max-w-[80vw] border-slate-500 bg-def_blue_gray_light flex flex-col gap-3 relative flex-shrink-0`}
      onClick={(e) => setProjects(removeElementAtIndex(projects, index))}
    >
      {/* Circle */}
      {!open && (
        <motion.div className="px-2 group relative hover:text-opacity-0 flex items-center justify-center w-full h-full">
          <div className="close scale-0 group-hover:scale-100 absolute text-2xl duration-200">
            <IoClose />
          </div>
          <div className="text scale-100 group-hover:scale-0 duration-200 text-lg">
            {index! + 1}
          </div>
        </motion.div>
      )}

      {/* Name & Type */}
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0, translateY: "100%" }}
          animate={{ opacity: 1, scale: 1, translateY: "0%" }}
          className="profileDetails w-full flex flex-wrap gap-3 text-xs items-center justify-between"
        >
          <input
            type="text"
            placeholder="Project Name"
            value={projectDetails.name}
            onChange={(e) =>
              setProjectDetails({ ...projectDetails, name: e.target.value })
            }
            className="rounded-[5px] bg-def_blue_gray_dark px-4 py-2 flex-1 font-FiraMono outline-none"
          />
          <input
            type="text"
            placeholder="Project Type"
            value={projectDetails.type}
            onChange={(e) =>
              setProjectDetails({ ...projectDetails, type: e.target.value })
            }
            className="rounded-[5px] bg-def_blue_gray_dark px-4 py-2 flex-1 font-FiraMono outline-none text-def_white/70"
          />
        </motion.div>
      )}

      {/* Details */}
      {open && (
        <motion.textarea
          initial={{ opacity: 0, scale: 0, translateY: "100%" }}
          animate={{ opacity: 1, scale: 1, translateY: "0%" }}
          name=""
          id=""
          rows={4}
          placeholder="What Is Your Project For"
          value={projectDetails.details}
          onChange={(e) =>
            setProjectDetails({ ...projectDetails, details: e.target.value })
          }
          className="text-xs bg-def_blue_gray_dark rounded-[7px] outline-none resize-none p-2 text-def_white/40 font-FiraMono h-[50px]"
        ></motion.textarea>
      )}

      {/* Project Stack */}
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0, translateY: "100%" }}
          animate={{ opacity: 1, scale: 1, translateY: "0%" }}
          className="projectStack flex flex-col gap-2 "
        >
          <label
            htmlFor="projectStack"
            className="addProjectStack w-full h-[60px] rounded-[7px] bg-def_blue_gray_dark resize-none p-2 outline-none text-xs relative flex gap-2 flex-wrap overflow-y-scroll cursor-text no-scrollbar"
          >
            {projectDetails.stack.map((ele, ind) => {
              return <Chips size="xs" bg="bg-white" text={ele} key={ind} />;
            })}
            <div className="inputWrapper relative w-full">
              <input
                id="projectStack"
                placeholder="click enter to add the stacks"
                className="bg-transparent outline-none flex-1 self-start font-FiraMono capitalize"
                value={ProjectStack}
                onChange={(e) => {
                  setProjectStack(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    if (projectDetails.stack.length < 5) {
                      setProjectDetails({
                        ...projectDetails,
                        stack: [
                          ...projectDetails.stack,
                          "#" +
                            ProjectStack?.slice(0, 1).toUpperCase() +
                            ProjectStack?.slice(1),
                        ],
                      });
                      setProjectStack("");
                    } else alert("You Can't Add More Than 5");
                  } else if (e.key == "Backspace" && ProjectStack == "")
                    setProjectDetails((e) => {
                      return {
                        ...e,
                        stack: e.stack.slice(0, e.stack.length - 1),
                      };
                    });
                  else if (e.key == "Tab" && ProjectStack) {
                    e.preventDefault();
                    if (projectDetails.stack.length < 5) {
                      setProjectDetails((e) => {
                        return {
                          ...e,
                          stack: [
                            ...e.stack,
                            "#" + findMostMatchingWord(ProjectStack),
                          ],
                        };
                      });
                      setProjectStack("");
                    } else alert("You Can't Add More Than 5");
                  }
                }}
              ></input>
              <div className="shadowedWord absolute top-0 left-0 font-FiraMono text-white/30 max-w-full">
                {ProjectStack}
                {ProjectStack &&
                  findMostMatchingWord(ProjectStack || "")
                    .toString()
                    .split("")
                    .splice(ProjectStack.length)
                    .join("")}
              </div>
            </div>
            <div className="flex flex-col absolute"></div>
          </label>
        </motion.div>
      )}

      {/* Link */}
      {open && (
        <motion.input
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          type="text"
          placeholder="Project Link"
          value={projectDetails.link}
          onChange={(e) =>
            setProjectDetails({ ...projectDetails, link: e.target.value })
          }
          className="rounded-[5px] bg-def_blue_gray_dark px-4 py-2 flex-1 font-FiraMono outline-none text-xs"
        />
      )}

      {/* Add */}
      {open && (
        <motion.div
          className="w-full px-3 py-1.5 rounded-[5px] bg-def_dark_blue flex items-center justify-center text-xs cursor-pointer font-FiraMono"
          onClick={(e) => {
            AddProject();
            e.stopPropagation();
          }}
        >
          Add
        </motion.div>
      )}
    </motion.div>
  );
};

export default AddProject;
