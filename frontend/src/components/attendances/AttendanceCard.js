import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import EditIcon from '@material-ui/icons/EditRounded'
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import ThingahaName from '../common/ThingahaName'

const AttendanceCardWrapper = styled(Paper)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  padding: 0.5em 1rem;
  margin: 0.5rem 0rem;

  &.deactivated {
    background-color: lightgrey;
  }

  & .row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin: 0.2rem 0rem;
    align-items: center;
  }

  & .iconTextWrapper {
    display: flex;
    flex-direction: row;
  }

  & .w25 {
    width: 25%;
  }

  & .w50 {
    width: 50%;
  }

  & .name {
    font-size: 1rem;
    line-height: 2rem;
  }

  & .capName {
    font-size: 0.9rem;
    line-height: 1.25rem;
    margin: 0;
  }

  & .smallText {
    padding-left: 0.5rem;
    font-size: 0.75rem;
    line-height: 1.25rem;
  }

  & .edit {
    cursor: pointer;
  }

  & .show {
    cursor: pointer;
  }

  & .text-right {
    text-align: right;
  }
`

const AttendanceCard = ({ attendance, onEdit }) => {
  const deactivatedClass = classnames({
    deactivated: Boolean(attendance.student.deactivated_at),
  })

  return (
    <AttendanceCardWrapper className={deactivatedClass}>
      <div className="row">
        <ThingahaName className="thingaha-name w25">
          {attendance.student.name}
        </ThingahaName>
        <div className="iconTextWrapper w25">
          <h5 className="capName">Donator Name : </h5>
          <div className="smallText">{attendance.grade}</div>
        </div>
        <div className="w50 text-right">
          <Link
            to={`/attendances/${attendance.id}`}
            params={{ attendancename: attendance.student.name }}
          >
            <VisibilityRoundedIcon
              color="primary"
              className="show"
              variant="rounded"
            />
          </Link>
          <EditIcon
            color="primary"
            className="edit"
            variant="rounded"
            onClick={() => {
              onEdit(attendance)
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="iconTextWrapper w25">
          <h5 className="capName">Grade : </h5>
          <div className="smallText">{attendance.grade}</div>
        </div>
        <div className="iconTextWrapper w25">
          <h5 className="capName">Year : </h5>
          <div className="smallText">({attendance.year})</div>
        </div>
        <div className="iconTextWrapper w50">
          <h5 className="capName">Grade : </h5>
          <div className="smallText">{attendance.school.name}</div>
        </div>
      </div>
    </AttendanceCardWrapper>
  )
}

export default AttendanceCard